import React, { use, useEffect, useState } from 'react';


// const dataPromise = fetch('/friends.json').then(res=> res.json())

const Info = () => {

    // const freindsInfo = use(dataPromise);
    // console.log(freindsInfo, "frends info");

    const [friendsInfo, setFriendsInfo] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/friends.json');
            const data = await res.json()
            // console.log(data);
            setFriendsInfo(data);
        }
        fetchData()
    },[])

    // console.log(friendsInfo);

   

    const onTrackCount = friendsInfo.filter(
        friend => friend.status === "on-track"
    ).length

    const needAttention = friendsInfo.filter(
        friend=> friend.status === "overdue" || friend.status === "almost due"
    ).length


    return (
        <div>
            <div className=' max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>4</h1>
                    <p>Total Friends</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>{onTrackCount}</h1>
                    <p>On Track</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>{needAttention}</h1>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white shadow-sm p-8 text-center w-full'>
                    <h1>{friendsInfo.length}</h1>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Info;