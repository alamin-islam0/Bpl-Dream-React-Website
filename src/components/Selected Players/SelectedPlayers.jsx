import React from "react";
import SelectedPlayerCard from "../selected player card/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayer, removePlayer}) => {
  console.log(purchasePlayer);
  return (
    <div className="max-w-[1200px] mx-auto mt-16 px-4">
        
      {
        purchasePlayer.map(player => (
          <SelectedPlayerCard
            key={player.player_name}
            player={player}
            removePlayer={removePlayer}
          ></SelectedPlayerCard>
        ))
      }
      </div>
  );
};

export default SelectedPlayers;
