import { faAlipay } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import '../MyItem/MyItem.css';
import Loading from '../Shared/Loadding/Loading';




const ManageOrder = () => {
    const { data: item, isLoading, refetch } = useQuery('users', () => fetch('https://bicysel-server.herokuapp.com/orderAll', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const handelDelete = id => {
        const url = `https://bicysel-server.herokuapp.com/order/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Oparation Successful');
                }
            })
        refetch();
    }

    // const hendleShipped = id => {
    //     fetch(`https://bicysel-server.herokuapp.com/orderAll/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 toast.success('Successfully Shipped')
    //             }
    //         })
    //     const remainningProduct = item.filter(p => !p.delivary);
    //     // setItem(remainningProduct);
    // }

    return (
        <div className='container mb-5 mt-3 items userProducts'>
            <p className='font-bold mb-0 mt-4 text-sm ms-4'>! All Order Item Here, Please Shipped product</p>
            {
                item.map(product => (
                    <div key={product._id} className="product align-middle justify-content-between py-1">
                        <img className=' w-[80px] rounded mx-auto' src={product.image} alt="images" />
                        <div className="w-100 px-2 mt-1 mx-auto">
                            <div className='text-orange-500 trnangectionId text-center w-100 mx-auto'>
                                {product.trnangectionId && <span ><span className='text-[gray]'>This Item trnangection id:</span>  {product.trnangectionId}</span>}
                            </div>
                            <div className="d-flex align-middle justify-content-between orderP">
                                <p> <b className='cardP'>{product.name}</b></p>
                                <p className='cardP text-xs me-2'>Quantity: {product.quantity}</p>
                            </div>
                            <hr className='mb-2 mt-0' />
                            <div className="d-flex align-middle justify-content-between">
                                <p className='p-0 m-0'>Total price: $<i>{product.quantity * product.price}</i></p>
                                <div className=" d-flex">
                                    {!product.paid ?
                                        <p onClick={() => handelDelete(product._id)} className='rounded py-1 px-2 text-light bg-success me-2 cursor-pointer text-xs' role="button">Shipped</p> :
                                        <p className='rounded py-1 text-secondary border paidBtn me-1 rounded px-3 text-xs'>Paid</p>
                                    }
                                    {product.paid ?
                                        <p onClick={() => handelDelete(product._id)} className='rounded py-1 text-light bg-success px-3 border me-2 text-xs' role="button">Shipped</p> :
                                        <p onClick={() => handelDelete(product._id)} className='rounded py-1 px-2 text-light bg-[red] me-2 cursor-pointer text-xs' role="button"> <FontAwesomeIcon className='orderIcon' icon={faTrash} /> Delete</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageOrder;