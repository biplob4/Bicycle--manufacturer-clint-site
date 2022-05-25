import React from 'react';
import './Review.css'


const ReviewTow = ({ reviews }) => {
    const { comment, avatar, username, review, email } = reviews;

    // ratting display show function
    function StarRating({ count, value, inactiveColor, activeColor }) {
        const stars = Array.from({ length: count }, () => 'random string')
        return (
            <div>
                {stars.map((s, index) => {
                    let style = inactiveColor;
                    if (index < value) {
                        style = activeColor;
                    }
                    return (
                        // <span key={index} style={{ color: style }} > {s} </span>
                        <input key={index} style={{ backgroundColor: style }} type="radio" name="rating-4" class="mask mask-star-2 mt-[2px] mx-[1px]" />
                    )
                })}
            </div>
        )
    }

    return (
        <div className="review-container">
            <div className='mb-5'>
                <img src={avatar} alt="img" />
                <h5 className='text-sm'>{username}</h5>
                <p className='font-bold font-xl'>{comment}</p>
                <div className="review">
                    <div className='text-xs text-[gray]'>{email}</div>
                    <div className='text-xs text-[gray] rating rating-xs '>Ratting:
                        <span className='me-1'>({review})</span>
                        <StarRating count={5} value={review} activeColor={'#198754'} inactiveColor={'gray'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewTow;