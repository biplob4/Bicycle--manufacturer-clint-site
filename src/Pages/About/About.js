import React from 'react';
import './About.css';
import biplobImg from '../../image/90052148_482220126017992_9037111425624965120_n.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const nevigate = useNavigate()
    return (
        <div className='w-100 about-container my-5 py-5'>
            <div className="container about-me">
                <div className="mx-auto">
                    <div className="text-[gray]">
                        <img className='d-block mx-auto m-0' src={biplobImg} alt="img" />
                        <h2 className='text-primary m-0 text-center'>BIPLOB HOSSEN</h2>
                        <h3 className='mb-5 text-center'>Professional Web Developer And Desiner</h3>
                        <p className='mx-auto'>Hello,,<br /> Iam <strong>BIPLOB</strong> thank you for visiting my website.I have been doing Web Development for the last Tow years and I have a lot of reputation.I have a goal of doing 20 Web site build in the next one year.You can hire me if you want</p>
                        <button onClick={() => nevigate("/checkout")} className='btn mt-2 btn-success d-block mx-auto'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;