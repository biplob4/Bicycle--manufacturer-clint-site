import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loadding/Loading';

const Purchase = () => {
    const [pis, setPis] = useState(false);
    const [eroor, setEroor] = useState('');
    // const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const { data: parts, isLoading } = useQuery(['parts', id], () => fetch(`http://localhost:5000/parts/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading || loading) {
        return <Loading />
    }

    const value = value => {
        setPis(value);
        if (value > parts.avilable) {
            setEroor("Please do not add more than abilable");
            setPis(parts.minimum)
        } else { setEroor("") }
        if (parts.minimum > value) {
            setEroor("Please do not add less than the minimum")
        }
    }

    const handleBooking = event => {

        event.preventDefault();
        const value = event.target.quantity.value;
        if (parts.minimum > value) {
            setEroor("Please do not add less than the minimum");
            return;
        }

        // const booking = {
        //     treatmentId: _id,
        //     treatment: name,
        //     date: formattaedDate,
        //     patient: user.email,
        //     slot,
        //     price,
        //     patientName: user.displayName,
        //     phone: event.target.phone.value
        // }

        // fetch('https://quiet-brook-43613.herokuapp.com/booking', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // to close the modal
        //         if (data.success) {
        //             toast(`Appointment is set ${formattaedDate} at ${slot}`)
        //         }
        //         else {
        //             toast.error(`Alrady have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        //         }
        //         refetch();
        //         setTreatment(null);
        //     })

    }

    return (
        <div className="my-5 py-5">
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <img src={parts.image} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div class=" flex-shrink-0 w-full max-w-sm">
                        <div class="card-body shadow">
                            <h3 className="text-xl text-[gray] text-center py-2" > Order Now :{parts?.name}</h3 >
                            < form onSubmit={handleBooking} className='ms-3' >
                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <p className='text-[red] text-xs p-0 m-0 mb-1'>{eroor}</p>
                                <input type="number" name="quantity" onChange={(e) => value(e.target.value)} value={pis} className="input input-bordered w-full max-w-xs mb-3 d-block" placeholder='Add Quantity' required />
                                {/* <select name="slot" className="select select-bordered w-full max-w-xs  mb-3 d-block">
                                    {
        //                         slots.map((slot, index) => <option
        //                             key={index}
        //                             value={slot}
        //                         >{slot}</option>)
        //                     }
                                    <option value='84345'>3233</option>
                                    <option value='8888'>888</option>
                                    <option value='44444'>4444</option>
                                </select> */}
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs mb-3 d-block" required />
                                <input type="submit" value="Submit" className="btn btn-success w-full max-w-xs " />
                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Purchase;