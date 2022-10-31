import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form className="hero-content flex-col">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="Enter email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <Link to='/register' className="label-text-alt link link-hover">Create Account?</Link>
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

export default Login;