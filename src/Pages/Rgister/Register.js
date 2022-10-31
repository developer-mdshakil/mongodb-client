import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({});

    const registerSubmitHandler = event=> {
        event.preventDefault();
        const form = event.target;
        console.log(user);
        fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((data) => {
           if(data.acknowledged){
            alert('user added successfull');
            form.reset();
           }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const inputHandler = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    return (
    <form onSubmit={registerSubmitHandler} className="hero-content flex-col">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input onBlur={inputHandler} type="text" name='name' placeholder="Enter name" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Address</span>
            </label>
            <input onBlur={inputHandler} type="text" name='address' placeholder="Enter address" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input onBlur={inputHandler} type="text" name='email' placeholder="Enter email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input onBlur={inputHandler} type="password" placeholder="password" className="input input-bordered" />
            <label className="label">
                <Link to='/login' className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
        </div>
        </div>
    </form>
    );
};

export default Register;