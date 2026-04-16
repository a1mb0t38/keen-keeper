import React from 'react';
import { GoPlus } from 'react-icons/go';

const Banner = () => {
    return (
        <div>
            <div className='max-w-[1110px] mx-auto text-center space-y-5 mt-20'>
                <h1 className='text-[#244D3F] font-bold text-5xl'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white font-semibold text-base'><GoPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;