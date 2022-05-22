import React from 'react';
import Button from './Button';
import logo from '../../image/logo1.png';
import Description from './Description';

const Home = () => {
    return (
        <div className="">
            <div className="header">
                <img src={logo} className='display-md-none' alt="" srcset="" />
                <div class="hero min-h-screen bg-base-200 p-3">
                    <div class="hero-content text-start">
                        <div class="max-w-md">
                            <h2 class="text-5xl text-bold">Let's do business together and develop <br /> our own business,,</h2>
                            <p class="py-6 font-bold">Hello,, welcome to our company.All kinds of bicycle tools are available here. You can get the tools <br />you need from here</p>
                            <Button>
                                Get Start Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Description/>
        </div>
    );
};

export default Home;