import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json'
import Player from './Component/Player';
import Summary from './Component/Summary/Summary';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

   const [players, setPlayers] = useState([]);
   const [summary,setSummary] = useState([]);

   useEffect(()=> {
    setPlayers(playerData);
    const playerName = playerData.map(player => player.name);
    console.log(playerName);
   }, [])

   const handlePlayerInfo =(player) =>{
     const newPlayer = [...summary,player];
      setSummary(newPlayer)
    }
  return (
    <div className="App">
      <div className ='legends'>
        <h1>Legendary Five-a-Side Team</h1>
      <ul>{
        playerData.map(player => <Player player = {player} handlePlayerInfo={handlePlayerInfo} key = {player.id}></Player>)
        }
        </ul>
      </div>

      <div className ='Summary-cart'>
      <h2>Five ASide Team</h2> 
      <h4>Total Player: {players.length}</h4>
      <Summary summary ={summary}></Summary>
      </div>
      
      
    </div>
  );
}

export default App;
