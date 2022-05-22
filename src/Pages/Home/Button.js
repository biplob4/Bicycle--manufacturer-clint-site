import React from 'react';
import './Button.css'

const Button = ({children}) => {

    return (
        <button className='btnCoustom'>{children}</button>
    );
};

export default Button;