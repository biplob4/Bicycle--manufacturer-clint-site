import { faAlipay } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    const nevigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setItem(data)
                });
        }
    }, [user])

    const handelDelete = id => {
        const url = `http://localhost:5000/order/${id}`;
        const agrre = window.confirm('are you sure');
        if (agrre) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remainning = item.filter(product => product._id !== id);
                    setItem(remainning);
                    toast('Delete Item')
                })
        }
    }



    return (
        <div className='container my-5 py-5 items userProducts'>
            {
                item.map(product => (
                    <div key={product._id} className="product align-middle justify-content-between ">
                        <div className="d-flex align-middle justify-content-between">
                            <img className='orderImage' src={product.image} alt="images" />
                        </div>
                        <div className="w-75 me-4 mt-3">
                            <div className="d-flex align-middle justify-content-between">
                                <p> <b className='me-3 '>{product.name}</b></p>
                                <p className='p-0  me-3 '>Quantity: {product.quantity}</p>
                            </div>
                            <hr className='mb-2 mt-0' />
                            <div className="d-flex align-middle justify-content-between">
                                <p>Total price: $<i>{product.quantity * product.price}</i></p>
                                <div className=" d-flex">
                                    {!product.paid ?
                                        <p onClick={() => navigate(`/payment/${product._id}`)} className='rounded py-1 px-2 text-light bg-success me-2 cursor-pointer text-xs' role="button"> <FontAwesomeIcon className='orderIcon' icon={faAlipay} /> Pay</p> :
                                        <p className='rounded py-1 px-5 text-success border me-2 text-xs' role="button"> Paid</p>
                                    }
                                    {!product.paid && <p onClick={() => handelDelete(product._id)} className='rounded py-1 px-2 text-light bg-danger me-2 cursor-pointer text-xs' role="button"> <FontAwesomeIcon className='orderIcon' icon={faTrash} /> Delete</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyItem;