import React, { use } from 'react';

const AvailablePayers = ({playersPromise}) => {

    const playersData = use(playersPromise)
    console.log(playersData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h2 >Available</h2>
        </div>
    );
};

export default AvailablePayers;