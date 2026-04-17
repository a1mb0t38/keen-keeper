
import { CircleLoader } from 'react-spinners';
import useData from '../../hooks/useData';
import { Link } from 'react-router';




const Info = () => {

    const { friendsInfo, loading } = useData();

    // console.log(obj, "this is custom hook")

    const onTrackCount = friendsInfo.filter(
        friend => friend.status === "on-track"
    ).length

    const needAttention = friendsInfo.filter(
        friend => friend.status === "overdue" || friend.status === "almost due"
    ).length


    return (
        <div>
            <div className=' max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1 className='font-semibold text-3xl text-[#244D3F]'>4</h1>
                    <p className='text-base text-[#64748B]'>Total Friends</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1 className='font-semibold text-3xl text-[#244D3F]'>{onTrackCount}</h1>
                    <p className='text-base text-[#64748B]'>On Track</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1 className='font-semibold text-3xl text-[#244D3F]'>{needAttention}</h1>
                    <p className='text-base text-[#64748B]'>Need Attention</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1 className='font-semibold text-3xl text-[#244D3F]'>{friendsInfo.length}</h1>
                    <p className='text-base text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
            <div className='max-w-[1110px] mx-auto border-b border-[#E9E9E9] mt-10'>

            </div>
            <div className='max-w-[1110px] mx-auto mt-10'>
                <p className='text-left mb-4 font-semibold text-2xl text-black'>Your Friends</p>
            </div>

            {
                loading ? (
                    <div className='flex items-center justify-center mb-8'>
                        <CircleLoader color='#244D3F' />
                    </div>
                ) : (
                    <div className='max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pt-10 gap-6 mb-20'>
                        {
                            friendsInfo.map(friend => {
                                return <Link to={`/${friend.id}`} key={friend.id}>

                                    <div to={`/${friend.id}`} className=' max-w-[260px] h-[254px] bg-white shadow-sm rounded-tr-lg text-center'>
                                        <div className='flex items-center justify-center mb-3'>
                                            <img className='max-w-[80px] h-[80px] rounded-full' src={friend.picture} alt="" />
                                        </div>
                                        <p className='font-semibold textarea-lg text-black'>{friend.name}</p>
                                        <p className='mt-2 textarea-sm text-[#64748B]'>{friend.days_since_contact} ago</p>
                                        <div className='flex items-center justify-center gap-2 py-2'>
                                            {
                                                friend.tags.map((tag, ind) => {
                                                    return <button className='py-1.5 px-2 bg-[#CBFADB] rounded-full text-black textarea-sm font-medium' key={ind}>{tag}</button>
                                                })
                                            }
                                        </div>

                                       <div className='flex items-center justify-center'>
                                         {
                                            friend.status === "almost due" ? (<button className='py-1.5 px-2 bg-[#EFAD44] text-white font-medium textarea-sm rounded-full'>{friend.status}</button>) : friend.status === "overdue" ? (<button className='py-1.5 px-2 bg-[#EF4444] text-white font-medium textarea-sm rounded-full'>{friend.status}</button>) : (<button className='py-1.5 px-2 bg-[#244D3F] text-white font-medium textarea-sm rounded-full'>{friend.status}</button>)
                                        }
                                       </div>

                                    </div>
                                </Link>
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Info;