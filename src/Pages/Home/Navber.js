import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../Shared/CustomLink';
import './Home.css'

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className=''>
            <div>
                <Navbar style={{ background: "#fff", boxShadow: "rgba(33, 35, 38, 0.9) 0px 10px 10px -10px" }} className='navber my-0 py-0' fixed='top' collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className='nav-brand text-secondary' as={Link} to='/home'><h5 className='m-0'> <i>BicycelParts</i> </h5></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto menuitem">
                                <CustomLink className="nav-item nav-link mx-1 px-3" to="/home">Home</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/blogs">Blogs</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/addItem">Add Item</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3  " to="/manageInventorys">Manage Inventory</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/myItem">My Item</CustomLink>
                            </Nav>

                            <Nav className="ms-auto">
                                {!user ?
                                    <Link state={{ textDecoration: "none" }} to='/login'><small style={{ fontSize: "16px" }} className=' bg-[#3085E4] text-[#fff] px-3 py-2 rounded cursor-pointer'>Login/Signin</small></Link>
                                    :
                                    <a onClick={()=> signOut(auth)} href=""><small style={{ fontSize: "16px" }} className=' bg-[#3085E4] text-[#fff] px-3 py-2 rounded cursor-pointer'>Logout</small></a>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navber;