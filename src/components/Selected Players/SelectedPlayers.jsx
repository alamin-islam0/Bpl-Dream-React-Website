import React from "react";
import SelectedPlayerCard from "../selected player card/SelectedPlayerCard";

const SelectedPlayers = ({ purchasePlayer, removePlayer}) => {
  console.log(purchasePlayer);
  return (
    <div className="max-w-[1200px] h-[1000px] mx-auto mt-16">
        
      {
        purchasePlayer.map(player => <SelectedPlayerCard player = {player} removePlayer = {removePlayer}></SelectedPlayerCard>)
      }
      </div>
  );
};

export default SelectedPlayers;
