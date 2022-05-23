import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './Tolse.css';

const Tolse = () => {
    const navigate = useNavigate();
    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch('http://localhost:5000/parts').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <p>Loading ....</p>
    }

    const navegate = id => {
        navigate(`/purchase/:${id}`)
    }
    return (
        <div>
            <div className="tolse" id='tolse'>
                <h2 className="text-success text-center">Our Some Tools Examples {parts.length}</h2>
                <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
            </div>
            <div className="sengleTolse container py-5">
                {
                    parts.map(tolse =>
                        <div className='tolse'>
                            <h4 className="text-center py-2">{tolse.name}</h4>
                            <div className="singeletolseImg"><img src={tolse.image} alt="img" /></div>
                            <p title={tolse.description}>{tolse.description.length > 100 ? tolse.description.slice(0, 100) + "...." : tolse.description}</p>
                            <h5>${tolse.price}</h5>
                            <small className='text-gray-500 text-xs'>Avilable<strong>:</strong> <samp className='text-success'>({tolse.avilable})</samp></small> <br />
                            <small className='text-gray-500 text-xs'>Minimum-Order<strong>:</strong> <samp className='text-success'>({tolse.minimum})</samp></small> <br />
                            <button onClick={() => navegate(tolse._id)} className='mt-2 tolse-btn d-block mx-auto'>Purchase Now</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Tolse;