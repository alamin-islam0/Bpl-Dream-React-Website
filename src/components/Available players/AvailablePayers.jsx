import React, { use } from "react";
import PlayerCard from "../Player Card/PlayerCard";

const AvailablePayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasePlayer, setPurchasedPlayer }) => {
  const playersData = use(playersPromise);

  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto pt-8 pb-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersData.map(player => (
          <PlayerCard
            key={player.player_name}
            setAvailableBalance={setAvailableBalance}
            player={player}
            availableBalance={availableBalance}
            purchasePlayer={purchasePlayer}
            setPurchasedPlayer={setPurchasedPlayer}
          ></PlayerCard>
        ))
        
        }
      </div>
    </div>
  );
};

export default AvailablePayers;
