import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContexts } from '../../context/ContextProvider';
// import { RechartsDevtools } from '@recharts/devtools';



const Stats = () => {

    const {timeline} = useContext(TimelineContexts)

    const data = [
    { name: 'text', value: timeline.length, fill: '#0088FE' },
    { name: 'call', value: 2, fill: '#00C49F' },
    { name: 'video', value: 3, fill: '#FFBB28' },

];

    return (

        <div className='my-20'>
            <div className='max-w-[1110px] mx-auto text-left mb-6'>
                <h1 className='text-black font-bold text-5xl'>Friendship Analytics</h1>
            </div>
            <div className='max-w-[1110px] h-[410px] mx-auto bg-white shadow-sm'>
                <div className='flex justify-center'>
                    <p className='mt-7'>By Interaction Type</p>
                    <PieChart className='p-9' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;