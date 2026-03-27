import React from 'react';
import { use } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
const Players = ({ playersPromise }) => {

    // console.log(playersPromise)
    const playersData = use(playersPromise)
    console.log(playersData)

    return (
        <div className='container mx-auto mt-5'>
            <AvailablePlayers playersData={playersData}></AvailablePlayers>
        </div>
    );
};

export default Players;