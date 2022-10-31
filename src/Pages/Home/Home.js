import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displaUsers, setDisplayUsers] = useState(users);
    const deletHandler = user => {
        const agree = window.confirm(`Are you sure delete this user ${user.name}`)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('user delete succesfull');
                   const remainingUser = users.filter(usr => usr._id !== user._id);
                   setDisplayUsers(remainingUser);
                }
            }).catch(error=> console.log(error))
        }
    }
    return (
        <div className='container mx-auto'>
            <h2>Here User: {displaUsers.length}</h2>
            {
                displaUsers.map(user => <p key={user._id}>
                    {user.email} 
                    <Link to={`/profile/${user._id}`}>
                    <button className='btn bg-base-300'>Update</button>
                    </Link>
                    <button onClick={()=> deletHandler(user)} className='btn bg-base-300'>X</button>
                </p>)
            }
        </div>
    );
};

export default Home;