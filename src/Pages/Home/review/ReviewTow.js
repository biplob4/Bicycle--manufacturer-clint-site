import React from 'react';
import './Review.css'

const ReviewTow = ({ reviews }) => {
    const { comment, avatar, username, review, email } = reviews;
    let alart;
    return (
        <div className="review-container">
            <div className='mb-5'>
                <img src={avatar} alt="img" />
                <h5>{username}</h5>
                <p>{comment}</p>
                <div className="review">
                    <h6 className='text-xs text-[gray]'>{email}</h6>
                    <h6 className='text-xs text-[gray] rating rating-xs '>Ratting: 
                    ({review})
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500 " />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500 " />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500 " />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500 "/>
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500 " />
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default ReviewTow;