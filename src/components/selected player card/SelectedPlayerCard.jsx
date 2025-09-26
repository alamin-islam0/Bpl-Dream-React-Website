import React from 'react';
import TrashIcon from "../../assets/Frame.svg";


const SelectedPlayerCard = ({player,removePlayer}) => {

    const handleRemove = () => {
        removePlayer(player)
    }

    return (
        <div className="flex items-center justify-between bg-white text-black rounded-xl px-4 py-3 mb-3 shadow border">
        <div className="flex items-center gap-4">
          <div className="" />
            <img className='h-[80px] w-[80px] rounded-2xl' src={player.player_image} alt="" srcset="" />
          <div>
            <h3 className="font-semibold text-lg">{player.player_name}</h3>
            <p className="text-sm text-gray-600">{player.batting_style}</p>
          </div>
        </div>
        <div >
            <img onClick={handleRemove} src={TrashIcon} alt="" srcset="" />
        </div>
        
      </div>
    );
};

export default SelectedPlayerCard;