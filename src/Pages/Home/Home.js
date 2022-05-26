import React from 'react';
import Button from './Button';
import logo from '../../image/images.png';
import Description from './Description';
import Tolse from './Tolse';
import Contuct from './Contuct';
import Reviews from './reviews/Reviews';
import Boston from './Boston';

const Home = () => {
    return (
        <div className="">
            <div className="header">
                <div className=" my-5 " id='home'>
                    <img src={logo} className='display-md-none' alt="" srcset="" />
                    <div class="p-3">
                        <div class="text-start">
                            <div class="">
                                <h1 class="text-bold">Let's do business together and develop <br /> our own business,,</h1>
                                <p class="py-2 font-bold">Hello,, welcome to our company.All kinds of bicycle tools are available here. You can get the tools <br />you need from here</p>
                                <a style={{ textDecoration: "none" }} href="#tolse">
                                    <Button> Get Start Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Boston/>
            <Description />
            <Tolse />
            <Reviews />
            <Contuct />
        </div>
    );
};

export default Home;