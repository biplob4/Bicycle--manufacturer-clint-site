import { faEnvelope, faUser, faUserAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import Button from './Button';
import './Contuct.css';

const Contuct = () => {
    const handeleSubmit = e => {
        e.preventDefault();
        toast('Thenks for contuct us');
        e.target.reset();
    }
    return (
        <div className="contuctContainer mt-5" id='contuctContainer'>
            <div className='container' id='contuct'>
                <h1 className='pt-3 mb-4 mx-auto'>Contuct us</h1>
                <form onSubmit={handeleSubmit}>
                    <div className="group-input">
                        <div className="w-100">
                            <label>Frist Name </label>
                            <FontAwesomeIcon icon={faUser} className='ms-2'></FontAwesomeIcon>
                            <input className='w-100' type="text" name="" id="" placeholder='Name' required />
                        </div>
                        <div className="w-100">
                            <label>Last Name </label>
                            <FontAwesomeIcon icon={faUserAlt} className='ms-2'></FontAwesomeIcon>
                            <input className='w-100' type="text" name="" id="" placeholder='Last Name' required />
                        </div>
                    </div>
                    <label>Email </label>
                    <FontAwesomeIcon icon={faEnvelope} className='ms-2'></FontAwesomeIcon>
                    <input type="email" name="" id="" placeholder='Email' required />
                    <label>Comment or Mesage </label>
                    <textarea name="" id="" placeholder='Comment' />
                    <Button type="submit" className='d-block w-50 mx-auto'>Magase us</Button>
                </form>
            </div>
        </div>
    );
};

export default Contuct;