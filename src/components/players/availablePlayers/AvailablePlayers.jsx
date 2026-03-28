import React from 'react';

import Card from '../../ui/Card';

const AvailablePlayers = ({ playersData, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                playersData.map((player) => {
                    return (
                        <Card player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></Card>
                    )
                }


                )
            }

        </div>
    );
};

export default AvailablePlayers;