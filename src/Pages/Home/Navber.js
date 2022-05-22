import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';
import './Home.css'

const Navber = () => {
    return (
        <div className=''>
            <div>
                <Navbar style={{background:"#fff"}} className='navber py-0 shadow-sm' fixed='top' collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className='nav-brand text-secondary' as={Link} to='/home'><h5 className='m-0'> <i>BicycelParts</i> </h5></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
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
                                <button className="mb-1 btn btn-success" to="/login">LOGIN/SIGNIN</button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navber;