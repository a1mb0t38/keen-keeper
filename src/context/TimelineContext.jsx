
import { useState } from 'react';
import { TimelineContexts } from './ContextProvider';





const TimelineContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState([])

    const data = {
        timeline,
        setTimeline,
    }

    return <TimelineContexts.Provider value={data}>{children}</TimelineContexts.Provider>
};

export default TimelineContextProvider;