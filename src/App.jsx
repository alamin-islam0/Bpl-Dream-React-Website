import { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AvailablePayers from "./components/Available players/AvailablePayers";
import SelectedPlayers from "./components/Selected Players/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(200000000)
  const [purchasePlayer, setPurchasedPlayer] = useState([])
  const removePlayer = (p) => {
    const filteredData = purchasePlayer.filter(ply => ply.player_name!==p.player_name)
    console.log(filteredData)
    setPurchasedPlayer(filteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("৳").join("").split(",").join("")))
  }

  return (
    <>
      <Header availableBalance = {availableBalance}></Header>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto bg-white pt-8">
        <h1 className="text-2xl font-bold text-black">
          {
            toggle ===true?"Available Players": `Available Players  (${purchasePlayer.length}/6)`
          }
        </h1>
        <div className="">
          <button onClick={()=> setToggle(true)}
            className={`p-3 border-r-0 border-1 rounded-l-2xl border-[#13131320] ${toggle === true?"bg-[#E7FE29]": ""} text-black`}
            type="button"
          >
            Available
          </button>
          <button onClick={()=> setToggle(false)}
            className={`p-3 border-1 border-l-0 rounded-r-2xl border-[#13131320] ${toggle === false?"bg-[#E7FE29]":""} text-black`}
            type="button"
          >
            Selected <span>{purchasePlayer.length}</span>
          </button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<h3>Available players data are loading....</h3>}>
        <AvailablePayers playersPromise={playersPromise} setAvailableBalance = {setAvailableBalance} availableBalance = {availableBalance} purchasePlayer={purchasePlayer} setPurchasedPlayer={setPurchasedPlayer}></AvailablePayers>
      </Suspense> : <Suspense>
        <SelectedPlayers purchasePlayer ={purchasePlayer} removePlayer = {removePlayer}></SelectedPlayers>
      </Suspense>
      }
      

      
    </>
  );
}

export default App;
