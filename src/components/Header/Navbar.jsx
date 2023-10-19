import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav' >
        <div className='flex justify-between items-center mt-2 container px-6'>
        <h1 className='text-4xl font-bold text-purple-500'>Knowledge-Cafe</h1>
        <div className='justify-end'>
        <ul className='text-3xl font-semibold text-purple-500'>
            <a className='ps-6' href="home">Home</a>
            <a className='ps-6'href="about">About</a>
            <a className='ps-6' href="contact us">Contact us</a>
        </ul>
        </div>
         <img className='random-img rounded-circle ' src="https://randomuser.me/api/portraits/men/52.jpg" alt="" />
        </div>
         <hr/>
        </div>
    );
};

export default Navbar;