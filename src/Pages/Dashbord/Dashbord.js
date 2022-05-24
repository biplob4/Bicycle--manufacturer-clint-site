import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='pt-5 mt-5 container'>
            <div class="navbar mx-auto">
                    <ul class="menu lg:menu-horizontal p-0 text-start w-100 rounded block border">
                        <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard">My Order</Link></li>
                        <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard/review">Add reviews</Link></li>
                        <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard/history">My History</Link></li>
                        {admin && <>
                            <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard/users">All Users</Link></li>
                            <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard/addDoctor">Add a Doctor</Link></li>
                            <li><Link style={{textDecoration:"none"}} className="text-sm" to="/dashboard/manageDoctor">Manage Doctor</Link></li>
                        </>}
                    </ul>
            </div>
            <h1 className='text-2xl text-success font-bold pt-3 text-center'>Welcome to your Dashboard</h1>
            <hr style={{ padding: "1px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
            <Outlet></Outlet>
            
        </div>
    )
};

export default Dashbord;