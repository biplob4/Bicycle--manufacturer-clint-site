import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tole = ({ tolse }) => {
    const navigate = useNavigate();

    const navegate = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='tolse'>
            <h4 className="text-center py-2">{tolse.name}</h4>
            <div className="singeletolseImg"><img src={tolse.image} alt="img" /></div>
            <p title={tolse.description}>{tolse.description.length > 100 ? tolse.description.slice(0, 100) + "...." : tolse.description}</p>
            <h5>${tolse.price}</h5>
            <small className='text-gray-500 text-xs'>Avilable<strong>:</strong> <samp className='text-success'>({tolse.avilable})</samp></small> <br />
            <small className='text-gray-500 text-xs'>Minimum-Order<strong>:</strong> <samp className='text-success'>({tolse.minimum})</samp></small> <br />
            <button onClick={() => navegate(tolse._id)} className='mt-2 tolse-btn d-block mx-auto'>Purchase Now</button>
        </div>
    );
};

export default Tole;