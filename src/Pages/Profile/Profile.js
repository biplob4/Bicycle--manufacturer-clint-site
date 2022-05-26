import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loadding/Loading';

const Profile = () => {
    const [user , loading] = useAuthState(auth);
    if(loading){
        return <Loading/>
    }

    return (
        <div className='shadow p-3 max-w-sm mt-3 mx-auto'>
            <img className='d-block mx-auto mex-w-sm' src={user.providerData.photoURL} alt="img" />
            <h4 className='text-center mb-4 text-success'>{user.displayName}</h4>
            <p className='text-center text-sm'><b>User Id:</b> {user.uid}</p>
            <p className='text-center text-sm'><b>Email:</b> {user?.email}</p>
        </div>
    );
};

export default Profile;