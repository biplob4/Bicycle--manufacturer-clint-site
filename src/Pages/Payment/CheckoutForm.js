import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loadding/Loading';

const CheckoutForm = ({ parts }) => {
    const { _id, price, email, user } = parts;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [trangactionId, setTransgactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setSuccess('');
        // comrim card payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setProcessing(false);
            // store payment on database
            const payment = {
                appointment: _id,
                trnangectionId: paymentIntent.id
            };
            setTransgactionId(paymentIntent.id);
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setCardError('');
                    setSuccess(' Your payment is completed!');
                    toast.success('Your payment is success watting for dalivary');
                })
        }
    }
    return (
        <div className='shadow p-4 bg-[#242B2E] rounded-xl text-light'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-success my-4 d-block mx-auto px-2' type="submit" disabled={!stripe || !clientSecret}>Pay now </button>
            </form>
            {processing && <Loading />}
            {cardError && <p className='text-xs text-red-500 text-center'>{cardError}</p>}
            {success && <div className='text-xs text-green-500 text-center'>
                <p>{success}</p>
                <p>your trangection id: <small className='text-orange-500 font-bold'>{trangactionId}</small></p>
            </div>}
        </div>
    );
};

export default CheckoutForm;