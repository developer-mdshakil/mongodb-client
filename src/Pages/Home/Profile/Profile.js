import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    const userProfile = useLoaderData();

    const [user, setUser] = useState({});

    const profileUpdate = event => {
        event.preventDefault();
        const form = event.target;
        fetch(`http://localhost:5000/users/${userProfile._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('profile information upadet!!');
                console.log(data)
            }
        })
      
    }

    const profileUpdateHandler = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-semibold'>Upadte user information</h2>
            <h4 className='text-xl'>Name: {userProfile.name}</h4>
     <form onSubmit={profileUpdate} className="hero-content flex-col">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input onChange={profileUpdateHandler} defaultValue={userProfile.name} type="text" name='name' placeholder="Enter name" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Address</span>
            </label>
            <input onChange={profileUpdateHandler} defaultValue={userProfile.address} type="text" name='address' placeholder="Enter address" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input onChange={profileUpdateHandler} defaultValue={userProfile.email} type="text" name='email' placeholder="Enter email" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
            </div>
        </div>
        </div>
    </form>
        </div>
    );
};

export default Profile;