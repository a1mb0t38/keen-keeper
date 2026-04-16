import React from 'react';

const Info = () => {
    return (
        <div>
            <div className=' max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>0</h1>
                    <p>Total Friends</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>0</h1>
                    <p>On Track</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>0</h1>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>0</h1>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Info;