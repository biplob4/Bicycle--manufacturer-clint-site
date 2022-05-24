import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewTow from '../review/ReviewTow';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container-xl my-5 py-5'>
            <h2 className='text-center text-success'>Our Amazing Result</h2>
            <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
            <Row xs={1} md={3} className='text-center review-container mt-5 allImg'>
                {
                    reviews.map(review => <ReviewTow key={review.id} reviews={review}></ReviewTow>)
                }
            </Row>
        </div>
    );
};

export default Reviews;