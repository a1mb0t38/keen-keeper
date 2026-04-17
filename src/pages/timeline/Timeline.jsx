import React, { useContext } from 'react';
import { TimelineContexts } from '../../context/ContextProvider';
import { FaHandshake } from 'react-icons/fa';

const Timeline = () => {

    const { timeline, setTimeline } = useContext(TimelineContexts)
    // console.log(timeline, "this is timeline")

    return (
        <div>
            <div className='max-w-[1110px] mx-auto mb-20'>
                <p className='font-bold text-5xl text-black mb-6'>Timeline</p>
                {
                    timeline.map((calls, ind) => {
                        return <div key={ind}>
                            <div className='max-w-[1110px] mx-auto bg-white shadow-sm py-4 px-4 mb-10'>
                                <p><span className='inline-block font-medium text-[20px] text-black'><FaHandshake />
                                    Meetup</span> <span className='inline-block text-[18px] text-[#64748B]'>with {calls.name}</span></p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Timeline;