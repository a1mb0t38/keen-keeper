import React, { useEffect, useState } from 'react';

const useData = () => {

    const [friendsInfo, setFriendsInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/friends.json');
            const data = await res.json()

            setTimeout(()=>{
                setFriendsInfo(data);
                setLoading(false);
                
            }, 1500);

        }
        fetchData()
    },[])

    return {friendsInfo, loading}
};

export default useData;