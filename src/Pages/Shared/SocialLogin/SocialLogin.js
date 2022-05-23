import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loadding/Loading';
import useToken from '../../Hooks/Hooks';
import './SocialLogin.css';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";

    if(loading){
        return(
            <Loading/>
        )
    }
    if(token){
        navigate (from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex alignItem-center justify-content-center my-2">
                <div style={{ width: "100%" }} className=""> <hr style={{ height: "2px" }} /> </div>
                <div className="mx-1">or</div>
                <div style={{ width: "100%" }} className=""> <hr style={{ height: "2px" }} /> </div>
            </div>
            {/* <p className='text-secondary text-center'>Sign in with your google account</p> */}
            <button className='w-100 py-2 socailLogin rounded' onClick={() => signInWithGoogle()}> <FontAwesomeIcon style={{ top: "65%", left: "10%" }} icon={faGoogle} size=''></FontAwesomeIcon> With Google</button>
        </div>
    );
};

export default SocialLogin;