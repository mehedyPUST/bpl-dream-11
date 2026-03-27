import React from 'react';
import { FaFlag, FaUserAlt } from "react-icons/fa";
import { IoFlagSharp } from 'react-icons/io5';

const AvailablePlayers = ({ playersData }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playersData.map((player) =>

                    <div className="card bg-amber-50 w-96 shadow-md">
                        <figure>
                            <img className='w-full h-60'
                                src={player.playerImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"> <FaUserAlt />{player.playerName}</h2>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-1'>
                                    <FaFlag></FaFlag>
                                    <p>{player.playerCountry}</p>
                                </div>
                                <button className='btn btn-outline'>{player.playerRole}</button>
                            </div>
                            <div className="divider"></div>
                            <h2>Rating: ({player.rating})</h2>
                            <div className='flex justify-between items-center'>
                                <p>{player.battingStyle}</p>
                                <p className='text-right'>{player.bowlingStyle}</p>

                            </div>


                            <div className="card-actions justify-between items-center">
                                <p>Price ${player.playerPrice}</p>
                                <button className="btn btn-outline">Choose Player</button>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default AvailablePlayers;