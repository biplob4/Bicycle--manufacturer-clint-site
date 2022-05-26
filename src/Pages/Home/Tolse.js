import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loadding/Loading';
import Tole from './Tole';
import './Tolse.css';

const Tolse = () => {
    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch('https://bicysel-server.herokuapp.com/parts').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <Loading />
    }
    if (!parts) {
        return <h4 className='text-center text-[red]'>Product Not Found</h4>
    }
    return (
        <div>
            <div className="tolse" id='tolse'>
                <h2 className="text-success text-center">Our Some Tools Examples {parts.length}</h2>
                <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
            </div>
            <div className="sengleTolse container py-5">
                {
                    parts?.slice(0,6).map(tolse =>
                        <Tole key={tolse._id} tolse={tolse} />
                    )
                }
            </div>
        </div>
    );
};

export default Tolse;