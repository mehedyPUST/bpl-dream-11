import React, { useState } from 'react';
import { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';
const Players = ({ playersPromise, setCoin, coin }) => {

    // console.log(playersPromise)
    const playersData = use(playersPromise)
    // console.log(playersData)
    const [activeBtn, setActiveBtn] = useState('available');
    // console.log(activeBtn)
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <div className='container mx-auto mt-5'>

            <div className='flex justify-between gap-4 items-center'>
                {activeBtn === 'available' ? <h2>Available Players</h2> : <h2>Selected Players (2/6)</h2>}
                <div className='mb-5 flex items-center'>
                    <button onClick={() => setActiveBtn('available')} className={`rounded-l-lg ${activeBtn === 'available' ? 'bg-yellow-400 text-white' : 'bg-gray-100'}  border-r-0 px-4 py-2`}>Available</button>

                    <button onClick={() => setActiveBtn('selected')} className={`rounded-r-lg ${activeBtn === 'selected' ? 'bg-yellow-400 text-white' : 'bg-gray-100'}  border-l-0 px-4 py-2`}>Selected</button>

                </div>
            </div>

            {activeBtn === 'available' ? <AvailablePlayers playersData={playersData} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>}

        </div>
    );
};

export default Players;