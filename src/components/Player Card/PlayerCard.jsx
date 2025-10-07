import React from "react";
import FlagImg from "../../assets/report 1.svg";
import UserImg from "../../assets/Group.svg";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasePlayer,
  setPurchasedPlayer,
}) => {
  const isSelected = purchasePlayer.some(
    (p) => p.player_name === player.player_name
  );

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("৳").join("").split(",").join("")
    );

    if (isSelected) {
      toast("Player already selected");
      return;
    }

    if (purchasePlayer.length >= 6) {
      toast("You can select a maximum of 6 players");
      return;
    }

    if (availableBalance < playerPrice) {
      toast("You do not have enough coin");
      return;
    }

    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayer([...purchasePlayer, playerData]);
  };

  return (
    <div className="card w-full shadow-sm rounded-2xl border-1 border-[#13131320] p-4 sm:p-6 bg-white">
      <figure>
        <img className="rounded-2xl w-full h-auto object-cover" src={player.player_image} alt="Shoes" />
      </figure>
      <div className="card-body p-0 pt-6 gap-0">
        <div className="flex items-center justify-between border-b-1 border-[#13131320] pb-4 gap-3">
          <h2 className="card-title text-[#131313] text-[20px] font-bold">
            <img src={UserImg} alt="" />
            {player.player_name}
          </h2>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#13131320] py-4 gap-3">
          <h2 className="card-title text-[#131313] text-[16px]">
            <img src={FlagImg} alt="" />
            {player.player_country}
          </h2>
          <button className="btn btn-primary border-0 shadow-none rounded-[10px] text-[#131313] bg-[#F3F3F3]">
            {player.playing_role}
          </button>
        </div>
        <div className="border-b-1 border-[#13131320] py-4">
          <div className="flex items-center justify-between pt-4">
            <h2 className="card-title text-[#131313] font-bold text-[16px]">
              {" "}
              {player.rating}
            </h2>
            <h2 className="card-title text-[#131313] font-normal text-[16px]">
              {player.rating}
            </h2>
          </div>
          <div className="flex items-center justify-between pt-4">
            <h2 className="card-title text-[#131313] text-[16px]">
              {player.batting_style}
            </h2>
            <button className="border-0 shadow-none rounded-[10px] text-[#131313] text-[16px]">
              {player.bowling_style}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <h2 className="card-title text-[#131313] text-[16px]">
            Price: {player.price}
          </h2>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn btn-primary border-1 border-[#13131320] shadow-none rounded-[10px] text-[#131313] bg-[#f3f3f300]"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
