import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faKey, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loadding/Loading';
import useToken from '../../Hooks/Hooks';


const SignIn = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user);
    let from = location.state?.from?.pathname || "/";
    let badError ;
    let lode ;


    if(token){
        navigate (from, { replace: true });
        toast('successfully Sign in');
    }
    if(loading||updating){
       lode = <Loading/>
    }
    if (error||updateError) {
        badError = <p className='text-center text-danger m-1'>Error: {error.message}</p>
      }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.trems.checked; 
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        event.reset();
    }

    return (
        <div className='login-from py-5'>
            <form className='py-5' onSubmit={handleRegister}>
            <h5 className='text-secondary text-center pb-3'>Please active with us</h5>
                <div className="">
                    <input name='name' placeholder='Name' required /><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
                <div className="">
                    <input name='email' placeholder='Email' required /><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                <div className="">
                    <input name='password' type='password' placeholder='Password' required /><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></div>
                <div className="">
                    <input className='login-from-btn rounded' type="submit" value='SignIn' /><FontAwesomeIcon style={{left:"40%"}} icon={faUserPlus} color='#fff'></FontAwesomeIcon>
                </div>
                {lode}
                {badError}
                <div className="d-flex text-secondary">
                    <p style={{cursor:'pointer',fontWeight:"500"}} className='mb-0 mt-3  px-1 text-secondary text-sm'>If You Alraddy Have An Acccount :</p>
                    <Link className='ms-auto px-2' to='/login'><p style={{cursor:'pointer',fontWeight:"500"}} className='mb-0 mt-3'>LOGIN</p></Link>
                </div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignIn;