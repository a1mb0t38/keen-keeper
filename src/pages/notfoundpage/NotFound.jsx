import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
            <div className='max-w-3xl mx-auto space-y-3'>
                <h2 className='text-center'>404 - Page not found</h2>
                <p className='text-center'>the page you are looking for does not exits</p>
                <p className='text-center'><Link className='border border-green-700 text-green-700 p-2 rounded-lg' to={"/"}>Go Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;