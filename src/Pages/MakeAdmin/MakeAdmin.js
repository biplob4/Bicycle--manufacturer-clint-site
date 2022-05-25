import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loadding/Loading';

const MakeAdmin = () => {

    const { data: user, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    const handelDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data=>{
            toast.success('Successfully Delete User');
            refetch();
        })
    }

    const handelMakeAdmin = email => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data=>{
            toast.success('Successfully Made An Admin');
            refetch();
        })
    }

    return (
        <div className='mt-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>make user</th>
                            <th>delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u, index) =>
                                <tr key={index}>
                                    <th>{index + 1}.</th>
                                    <td className='font-bold text-[gray]'>{u.email}</td>
                                    {!u.role ? <td><button onClick={() => handelMakeAdmin(u.email)} className='btn btn-sm text-light bg-success'>Make Admin</button></td> : <td className='font-bold text-xs text-success'>ADMIN</td>}
                                    {!u.role ? <td><button onClick={() => handelDelete(u._id)} className='btn btn-sm text-light bg-danger'> <FontAwesomeIcon className='orderIcon' icon={faTrash} /> Delete</button></td> :
                                        <td className='font-bold text-xs text-success'>ADMIN</td>
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;