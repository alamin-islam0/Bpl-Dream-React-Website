import React from "react";
import TrashIcon from "../../assets/Frame.svg";

const SelectedPlayerCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white text-black rounded-xl px-4 py-3 mb-3 shadow border gap-3">
      <div className="flex items-center gap-4">
        <div className="" />
        <img
          className="h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] rounded-2xl object-cover"
          src={player.player_image}
          alt=""
        />
        <div>
          <h3 className="font-semibold text-lg">{player.player_name}</h3>
          <p className="text-sm text-gray-600">{player.batting_style}</p>
        </div>
      </div>
      <button className="self-end sm:self-auto" onClick={handleRemove}>
        <img src={TrashIcon} alt="" />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
