import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewTow from '../review/ReviewTow';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bicysel-server.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container-xl my-5 py-5' id='reiews'>
            <h2 className='text-center text-success'>Our Amazing Result</h2>
            <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
            <div className='text-center reviews mt-5 allImg'>
                {
                    reviews.map(review => <ReviewTow key={review.id} reviews={review}></ReviewTow>)
                }
            </div>
        </div>
    );
};

export default Reviews;