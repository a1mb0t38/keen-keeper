import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { CircleLoader } from 'react-spinners';
import { HiBellSnooze } from 'react-icons/hi2';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { TimelineContexts } from '../../context/ContextProvider';
import { toast } from 'react-toastify';


const FriendsDetails = () => {

    const { id } = useParams()
    const { friendsInfo, loading } = useData();
    const expectedFriend = friendsInfo.find(friend => String(friend.id) === id)
    
    // const [timeline, setTimeline] = useState([])
    const {timeline, setTimeline} = useContext(TimelineContexts)

    if (loading) {
        return <div className='flex items-center justify-center mb-8'>
            <CircleLoader color='#244D3F' />
        </div>
    }
    if (!expectedFriend) {
        return <p>Friend not found</p>
    }

    const handleTimelineCall = () =>{
        setTimeline([...timeline, expectedFriend])
        toast.success(`${expectedFriend.name} added to time line`);

    }
    // console.log(timeline, "timeline");

    return (
        <div>
            <div className='max-w-[1110px] mx-auto flex items-center gap-6 my-20'>
                <div>
                    <div className='text-center p-6 space-y-3 bg-white shadow-sm rounded-lg'>
                        <div className='flex items-center justify-center'>
                            <img className='w-[80px] h-[80px] rounded-full' src={expectedFriend.picture} alt="friend pic" />
                        </div>
                        <h2 className='text-black'>{expectedFriend.name}</h2>
                        {
                            expectedFriend.status === "almost due" ? (<button className='py-1.5 px-2 bg-[#EFAD44] text-white font-medium textarea-sm rounded-full'>{expectedFriend.status}</button>) : expectedFriend.status === "overdue" ? (<button className='py-1.5 px-2 bg-[#EF4444] text-white font-medium textarea-sm rounded-full'>{expectedFriend.status}</button>) : (<button className='py-1.5 px-2 bg-[#244D3F] text-white font-medium textarea-sm rounded-full'>{expectedFriend.status}</button>)
                        }
                        <div className='flex items-center justify-center gap-2 py-2'>
                            {
                                expectedFriend.tags.map((tag, ind) => {
                                    return <button className='py-1.5 px-2 bg-[#CBFADB] rounded-full text-black textarea-sm font-medium' key={ind}>{tag}</button>
                                })
                            }
                        </div>

                        <p className='text-[#64748B] font-medium text-base'>{expectedFriend.bio}</p>
                        <p className='textarea-md text-[#64748B]'>Preferred: email</p>
                    </div>
                    <div className='flex items-center justify-center py-4 px-24 bg-white shadow-sm mt-4 rounded-tr-sm'>
                        <p className='flex items-center text-black font-medium gap-2'><HiBellSnooze/>
                            Snooze 2 weeks</p>
                    </div>
                    <div className='flex items-center justify-center py-4 px-24 bg-white shadow-sm mt-2 rounded-tr-sm'>
                        <p className='flex items-center text-black font-medium gap-2'><FiArchive/>
                            Archive</p>
                    </div>
                    <div className='flex items-center justify-center py-4 px-24 bg-white shadow-sm mt-2 rounded-tr-sm'>
                        <p className='flex items-center text-red-600 font-medium gap-2'><RiDeleteBin6Line/>
                            Delete</p>
                    </div>

                </div>
                <div className='space-y-6'>
                    <div className='grid grid-cols-3 gap-6 text-center'>
                        <div className='py-8 px-4 bg-white shadow-sm rounded-lg'>
                            <h1 className='font-semibold text-3xl text-[#244D3F]'>{expectedFriend.days_since_contact}</h1>
                            <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='py-8 px-4 bg-white shadow-sm rounded-lg'>
                            <h1 className='font-semibold text-3xl text-[#244D3F]'>{expectedFriend.goal}</h1>
                            <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='py-8 px-4 bg-white shadow-sm rounded-lg'>
                            <h1 className='font-semibold textarea-lg text-[#244D3F]'>{expectedFriend.next_due_date}</h1>
                            <p className='text-[18px] text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='p-6 space-y-4 bg-white shadow-sm rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-medium textarea-lg text-[#244D3F]'>Relationship Goal</h1>
                            <button className='btn'>Edit</button>
                        </div>
                        <p><span className='text-[18px] text-[#64748B]'>Connect every</span> <span className='font-bold text-black'>{expectedFriend.goal} days</span></p>
                    </div>

                    <div className='p-6 space-y-4 bg-white shadow-sm rounded-lg'>
                        <p className='font-medium text-[20px] text-[#244D3F]'>Quick Check-In</p>
                        <div className='grid grid-cols-3 gap-4'>
                            <div onClick={handleTimelineCall} className='flex flex-col justify-center items-center p-4 bg-white shadow-sm rounded-lg space-y-2 cursor-pointer'>
                                <LuPhoneCall />
                                <p>Call</p>
                            </div>
                            <div onClick={handleTimelineCall} className='flex flex-col justify-center items-center p-4 bg-white shadow-sm rounded-lg space-y-2 cursor-pointer'>
                                <MdOutlineTextsms />
                                <p>Text</p>
                            </div>
                            <div onClick={handleTimelineCall} className='flex flex-col justify-center items-center p-4 bg-white shadow-sm rounded-lg space-y-2 cursor-pointer'>
                                <PiVideoCameraBold />
                                <p>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;