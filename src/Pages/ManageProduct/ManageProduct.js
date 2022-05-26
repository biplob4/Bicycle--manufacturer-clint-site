import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loadding/Loading';

const ManageProduct = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () =>
        fetch('http://localhost:5000/parts').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <Loading />
    }


    const handelDelete = id => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success('That Product is Dleted');
                refetch();
            })
    }
    return (
        <div className='mt-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='text-light bg-success'>
                            <th></th>
                            <th>image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Mange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((u, index) =>
                                <tr key={index}>
                                    <th>{index + 1}.</th>
                                    <td className='font-bold text-[gray]'><img className='w-[40px]' src={u.image} alt="" /></td>
                                    <td className='font-bold text-[gray]'>{u.name}</td>
                                    <td className='font-bold text-[gray]'>$ {u.price}</td>
                                    <td><button onClick={() => handelDelete(u._id)} className='btn btn-sm text-light bg-danger'> <FontAwesomeIcon className='orderIcon' icon={faTrash} /> Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;