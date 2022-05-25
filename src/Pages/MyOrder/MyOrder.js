import React from 'react';
import MyItem from '../MyItem/MyItem';

const MyOrder = () => {
    return (
        <div>
            <p className='font-bold mb-0 mt-4 text-info text-sm ms-4'>! Your All Item Here You Can Want To Delete And Pay now</p>
            <MyItem />
        </div>
    );
};

export default MyOrder;