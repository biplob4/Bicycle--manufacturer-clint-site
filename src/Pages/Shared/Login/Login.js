import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Loign.css';
import auth from '../../../firebase.init';
import Loading from '../Loadding/Loading';
import useToken from '../../Hooks/Hooks';

const Login = () => {
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email,setEmail] = useState('');
    let badError;
    let password;
    let lode ;
    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    }
    if(loading){
        lode = <Loading/>
     }
    if (error) {
        badError = <p className='text-center text-danger m-1'>Error: {error.message}</p>
    }

    const handleRegister = async event => {
        event.preventDefault();
        // email = event.target.email.value;
        password = event.target.password.value;
        // const agree = event.target.trems.checked; 
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-from py-5'>
            <form className='py-5' onSubmit={handleRegister}>
                <h5 className='text-secondary text-center pb-3'>Please Login your Account</h5>
                <div className="">
                    <input name='email' onChange={e=>setEmail(e.target.value)} placeholder='Email' required /><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                <div className="">
                    <input type='password' name='password' placeholder='Password' required /><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></div>
                <div className="">
                    <input className='login-from-btn rounded' type="submit" value='Login' /><FontAwesomeIcon style={{ left: "40%" }} icon={faSignIn} color='#fff'></FontAwesomeIcon>
                </div>
                {lode}
                {badError}
                <div className="d-flex text-secondary">
                    <p onClick={async () => { await sendPasswordResetEmail(email);if(email){ toast('Sent email')}; }} style={{ cursor: 'pointer', fontWeight: "500", textDecoration: 'underline' }} className='mb-0 mt-3  px-1 text-sm'>Forget Password</p>
                    <Link className='ms-auto px-2' to='/signIn'><p style={{ cursor: 'pointer', fontWeight: "500" }} className='mb-0 mt-3'>SignIn</p></Link>
                </div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;