import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Button from '../Home/Button';
import Loading from '../Shared/Loadding/Loading';

const AddRevie = () => {
    const [user, loading] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            name: user.displayName,
            comment: event.target.comment.value,
            image: user.photoURL,
            review: event.target.ratting.value
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => toast.success('Thanks For Giveing A Reviwe'))
            event.target.reset();
    }

    return (
        <div className='min-h-[80vh] '>
            <h6 className='text-info text-center pb-0 mt-4'>Please Add a Review</h6 >
            <div class="mb-5 mt-4">
                <div class="w-full max-w-xl mx-auto">
                    <div class="mx-auto">
                        {loading && <Loading/>}
                        < form onSubmit={handleBooking} className='bg-[#FFFFFF] w-100' >
                            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full mb-3 d-block" required />
                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full mb-3 d-block" required />
                            {/* <p className='text-[red] text-xs p-0 m-0 mb-1'>{eroor}</p> */}
                            <select name="ratting" className="input input-bordered w-full w-xl mb-3 d-block" placeholder="Your Ratting">
                                <option className='text-[gray]' disabled selected hidden>Your Ratting</option>
                                <option className='text-[gray]' value="5">5</option>
                                <option className='text-[gray]' value="4">4</option>
                                <option className='text-[gray]' value="3">3</option>
                                <option className='text-[gray]' value="2">2</option>
                                <option className='text-[gray]' value="1">1</option>
                            </select>
                            <textarea type="comment" name="comment" className="input input-bordered w-full min-h-[20vh] mb-3 d-block border" placeholder='Type Yor comment' required />
                            <Button className='d-block mx-auto' type="submit">Add Review</Button>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRevie;