import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AvailablePayers from "./components/Available players/AvailablePayers";
import SelectedPlayers from "./components/Selected Players/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Header></Header>
      
      <Suspense fallback = {<h3>Available players data are loading....</h3>}>
        <AvailablePayers playersPromise = {playersPromise}></AvailablePayers>
      </Suspense>

      <Suspense>
        <SelectedPlayers>

        </SelectedPlayers>
      </Suspense>
    </>
  );
}

export default App;
