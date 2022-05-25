import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loadding/Loading';

const Purchase = () => {
    const [pis, setPis] = useState(false);
    const [eroor, setEroor] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const navegate = useNavigate();

    const { data: parts, isLoading } = useQuery(['parts', id], () => fetch(`http://localhost:5000/parts/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading || loading) {
        return <Loading />
    }

    const value = value => {
        setPis(value);
        if (value > parts.avilable) {
            setEroor("Please do not add more than abilable");
        }
        else if (parts.minimum > value) {
            setEroor("Please do not add less than the minimum")
        } else { setEroor("") }
    }

    const handleBooking = event => {

        event.preventDefault();
        const value = event.target.quantity.value;
        if (parts.minimum > value) {
            setEroor("Please do not add less than the minimum");
            return;
        }
        if (parts.avilable < value) {
            setEroor("Please do not add more than abilable");
            return;
        }

        const order = {
            name: parts.name,
            email: user.email,
            price: parts.price,
            userName: user.displayName,
            image: parts.image,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // to close the modal
                if (data.success) {
                    toast.success(`Successfully added. go to dashboard and Pay now`)
                }
                else {
                    toast.error(`someting problem please try later`)
                }
                navegate('/dashboard')
            })

    }

    return (
        <div className="my-5 py-5  orderContainer min-h-[85vh]">
            <div class="container mt-5">
                <div class="order">
                    <div className="order1 me-auto">
                        <div class="card image-full">
                            <figure><img src={parts.image} class="rounded w-full" /></figure>
                            <div class="card-body mx-auto">
                                <h2 class="text-center text-info">{parts.name}</h2>
                                <p>{parts.description}</p>
                                <p className='text-center text-md m-0 p-0'>Avilable<strong>:</strong>    ({parts.avilable})</p>
                                <p className='text-center text-md m-0 p-0'>Minimum-Order<strong>:</strong>  ({parts.minimum})</p>
                            </div>
                        </div>
                    </div>
                    <div class=" flex-shrink-0 w-full max-w-sm">
                        <div class="card-body shadow bg-[#FFFFFF] mx-auto">
                            <h3 className="text-xl text-[gray] text-center py-2" > Please Order Now</h3 >
                            < form onSubmit={handleBooking} className='ms-3' >
                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <p className='text-[red] text-xs p-0 m-0 mb-1'>{eroor}</p>
                                <input type="number" name="quantity" onChange={(e) => value(e.target.value)} value={pis} className="input input-bordered w-full max-w-xs mb-3 d-block" placeholder='Add Quantity' required />
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="submit" value="Submit" className="btn btn-success w-full max-w-xs " />
                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Purchase;