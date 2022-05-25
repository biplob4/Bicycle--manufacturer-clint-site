import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="dashboard">
                            <h1 className='text-xl text-success font-bold pb-0 mt-5 pt-3 container'><i>Welcome To your Dashboard</i></h1>
            <div className='pt-3 container min-h-[90vh]'>
                <div class="ms-auto w-full">
                    <ul style={{ borderBottom: '1px solid lightgray' }} class=" menu lg:menu-horizontal p-0 block hover-none ">
                        <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard" aria-checked>My Order</CustomLink></li>
                        <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard/addReview">Add reviews</CustomLink></li>
                        <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard/Profile">My Profile</CustomLink></li>
                        {admin && <>
                            <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard/addProduct">Add Product</CustomLink></li>
                            <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard/manageOrder">Manage All Order</CustomLink></li>
                            <li><CustomLink style={{ textDecoration: "none" }} className="text-sm text-[#6C757D]" to="/dashboard/makeAdmin">Make Admin</CustomLink></li>
                        </>}
                    </ul>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    )
};

export default Dashbord;