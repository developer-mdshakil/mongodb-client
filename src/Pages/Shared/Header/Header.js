import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div className='bg-base-300'>
         <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Mongo DB</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
        </div>
      </div>
       </div>
    );
};

export default Header;