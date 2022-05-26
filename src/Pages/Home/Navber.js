import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../Shared/CustomLink';
import logo from '../../image/images.png';
import './Home.css'

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className=''>
            <div>
                <Navbar style={{ background: "#fff", boxShadow: "rgba(33, 35, 38, 0.9) 0px 10px 10px -10px" }} className='navber my-0 py-0 min-h-0' fixed='top' collapseOnSelect expand="lg">
                    <Container>
                        <img className='w-[60px]' src={logo} alt="" srcset="" />
                        <Navbar.Brand className='nav-brand text-secondary' as={Link} to='/home'><h5 className='m-0'> <i>BicycelParts</i> </h5></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto menuitem">
                                <CustomLink className="nav-item nav-link mx-1 px-3" to="/home">Home</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/blogs">Blogs</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/dashboard">Dashboard</CustomLink>
                                <CustomLink className="nav-item nav-link mx-1 px-3 " to="/protfolio">My Protfolio</CustomLink>
                                <a className="nav-item nav-link mx-1 px-3 " href="#description">About Us</a>
                            </Nav>

                            <Nav className="ms-auto">
                                {!user ?
                                    <Link state={{ textDecoration: "none" }} to='/login'><small style={{ fontSize: "16px" }} className=' bg-success text-[#fff] px-3 py-1 rounded cursor-pointer nav-item text-light nav-link mx-1 px-3 '>Login/Signin</small></Link>
                                    :
                                    <a onClick={() => signOut(auth)} href=""><small style={{ fontSize: "16px" }} className=' bg-success text-[#fff] px-3 py-1 rounded cursor-pointer text-light nav-link mx-1 px-3 '>Logout</small></a>
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