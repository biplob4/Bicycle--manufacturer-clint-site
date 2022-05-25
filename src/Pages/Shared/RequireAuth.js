import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // if (loading ||sending) {
    //     return <Loadding />
    // }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // check verufide email account

    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <div style={{ width: "320px" }} className='text-center my-5 py-5 border mx-auto rounded shadow'>
    //         <h5 className='text-danger'>Your Email is not verified!!</h5>
    //         <h5 className='text-secondary'> Please Verify your email address</h5>
    //         <button
    //             className='btn btn-info mt-3'
    //             onClick={async () => {
    //                 toast('Sent email');
    //                 await sendEmailVerification()
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //     </div>
    // }

    return children;
};

export default RequireAuth;