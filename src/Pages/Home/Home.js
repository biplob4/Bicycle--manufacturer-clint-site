import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import CustomLink from '../Shared/CustomLink';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Navbar className='navber py-0 shadow-sm' collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className='nav-brand' as={Link} to='/home'><h5 className='m-0'><strong className='ms-0'>Bicycel</strong>Parts</h5></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                        {/* <img src={logo} alt="" srcset="" /> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto menuitem">
                                <CustomLink className="nav-item nav-link mx-2 py-2" to="/home">Home</CustomLink>
                                <CustomLink className="nav-item nav-link mx-2 py-2 " to="/blogs">Blogs</CustomLink>
                                <CustomLink className="nav-item nav-link mx-2 py-2 " to="/addItem">Add Item</CustomLink>
                                <CustomLink className="nav-item nav-link mx-2 py-2  " to="/manageInventorys">Manage Inventory</CustomLink>
                                <CustomLink className="nav-item nav-link mx-2 py-2 " to="/myItem">My Item</CustomLink>
                            </Nav>

                            <Nav className="ms-auto">
                                <Button className="mb-1" to="/login">SignIn</Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <button class="btn btn-ghost">Button</button>    
        </div>
    );
};

export default Home;