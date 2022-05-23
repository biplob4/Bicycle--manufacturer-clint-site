import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import logo from '../../image/logo1.png'
import React from 'react';
import './Footer.css';


const Footer = () => {
    var todayDate = new Date().toISOString().slice(0, 10);
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMap}/></i>
                                    <div class="cta-text">
                                        <h4>Location us</h4>
                                        <span>khulna,jinydah,moshpur,khalishpur</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone}/></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>01754-102726</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"><FontAwesomeIcon  icon={faEnvelopeCircleCheck}/></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>biplobhossen6020@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src={logo} class="img-fluid" alt="logo"/></a>
                                    </div>
                                    <div class="footer-text">
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="http://www.google.com" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon style={{borderRadius:"15px"}} color='#fff' size='sn' className='bg-[#DD4B39] p-2' icon={faGoogle}/></a>
                                        <a href="https://github.com/biplob4" rel="noopener noreferrer"><FontAwesomeIcon style={{borderRadius:"15px"}} color='#fff'  size='sn' className='bg-[gray] p-2'  icon={faGithub}/></a>
                                        <a href="https://www.facebook.com/mdbiplob.hossen.3323/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon style={{borderRadius:"15px"}} color='#fff' size='sn' className='bg-[#0C86EE] p-2'  icon={faFacebook}/></a>
                                        <a href="https://www.facebook.com/mdbiplob.hossen.3323/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon style={{borderRadius:"15px"}} color='#fff' size='sn' className='bg-[green] p-2'  icon={faLinkedin}/></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                        <hr style={{height:"3px",color:"#198754e7"}}/>
                                    </div>
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#description">about</a></li>
                                        <li><a href="#tolse">services</a></li>
                                        <li><a href="#contuct">Contact</a></li>
                                        <li><a href="#description">About us</a></li>
                                        <li><a href="#tolse">Our Services</a></li>
                                        <li><a href="#contuct">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                        <hr style={{height:"3px",color:"#198754e7"}}/>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    
                                        <input className='emailFlid' style={{borderRadius:"25px"}} type="text" placeholder="Email Address"/> <br />
                                        <br />
                                         <button className='mt-2 tolse-btn ms-3'>Send mail</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block ">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#contuct">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 text-center text-lg-right">
                                <div class="copyright-text">
                                    <p>Copyright &copy; {todayDate}, All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
