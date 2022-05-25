import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="dashboard">
            <div className='pt-5 mt-5 container min-h-[80vh]'>
                <div class="navbar mx-auto ">
                    <ul class="menu lg:menu-horizontal p-0 text-start w-100 rounded-xl block border ">
                        <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard" aria-checked>My Order</Link></li>
                        <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard/review">Add reviews</Link></li>
                        <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard/history">My History</Link></li>
                        {admin && <>
                            <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard/users">All Users</Link></li>
                            <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard/addDoctor">Add a Doctor</Link></li>
                            <li><Link style={{ textDecoration: "none" }} className="text-sm text-[gray]" to="/dashboard/manageDoctor">Manage Doctor</Link></li>
                        </>}
                    </ul>
                </div>
                <h1 className='text-2xl text-success font-bold pt-3 text-center mb-5'><i>Welcome to your Dashboard</i></h1>
                <Outlet></Outlet>
            </div>
        </div>
    )
};

export default Dashbord;