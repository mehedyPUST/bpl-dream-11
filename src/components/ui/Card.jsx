import React, { useState } from 'react';
import { FaFlag, FaUserAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleChosePlayer = () => {


        let newCoin = coin - player.playerPrice;
        if (newCoin >= 0) {
            setCoin(coin - player.playerPrice)
            toast(`${player.playerName} is selected`)
            setIsSelected(true);
            setSelectedPlayers([...selectedPlayers, player])
        } else {
            alert('not enough coin to select this player')
        }


    }
    return (
        <div className="card bg-amber-50 border border-green-200  shadow-md">
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
                    <button onClick={handleChosePlayer} disabled={isSelected ? true : false} className="btn btn-outline">{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div >
    );
};

export default Card;