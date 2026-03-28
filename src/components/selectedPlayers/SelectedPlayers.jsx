import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers)

    const handleRemoveSelectedPlayer = (player) => {
        console.log(player, 'clicked remove')
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.playerPrice)
    }
    return (
        <div className='space-y-4'>
            {selectedPlayers.length === 0 ? <div>
                no player
            </div> :
                selectedPlayers.map((player) => {
                    return (


                        <div className='flex justify-between p-4 border border-green-500 rounded-md items-center '>

                            <div className='flex items-center gap-4'>
                                <img className='w-20 h-20 rounded-md' src={player.playerImage} alt="" />
                                <div className='flex gap-2 items-center'>
                                    <FaUserAlt></FaUserAlt>
                                    <div>
                                        <h2>{player.playerName}</h2>
                                        <h2>{player.playerRole}</h2>
                                    </div>
                                </div>
                            </div>
                            <button className='text-red-500 btn cursor-pointer text-2xl p-1 ' onClick={() => handleRemoveSelectedPlayer(player)}><MdDelete /></button>
                        </div>



                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;