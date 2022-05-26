import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loadding/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0tOqAO38zOuUv0XugrKf0tPfBx7WstDw4swHf4rdcVy1IhgoP7n1eHJAkDcFyb1fXUoMmYvEEXC30vPrmpHbYi00mr0bEMjW');


const Payment = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();

    const { data: parts, isLoading } = useQuery(['parts', id], () => fetch(`https://bicysel-server.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading || loading) {
        return <Loading />
    }
    return (
        <div className='w-100 my-5 min-h-[85vh] flex items-center justify-center'>
            <div class="flex-shrink-0 w-full max-w-md shadow bg-base-100 mx-auto py-2 rounded">
                <div class="card-body">
                    <div class="card-body text-center mb-3">
                        <h4 class="text-secondary">Hello, {user.displayName}</h4>
                        <p className="text-success font-bold m-0">Please Pay for:
                            <span className='text-xs text-secondary'> {parts?.name}</span>
                        </p>
                        <p className='text-success text-sm m-0 p-0'>Your Products: <span className='text-xs text-secondary'>{parts?.name}</span></p>
                        <p className='text-success text-sm m-0 p-0'>Products Quantity: <span className='text-xs text-secondary text-bo'>({parts?.quantity})</span></p>
                        <p className='text-success text-sm m-0 p-0'>Please pay: <span className='text-xs text-secondary text-bo'>(${parts?.quantity * parts?.price})</span></p> <hr />
                    </div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm parts={parts} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;