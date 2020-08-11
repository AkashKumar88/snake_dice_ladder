import React, { useState } from 'react';
import './App.css';
import Gamegrid from './components/Game_grid';

function App() {

  const [start, setStart] = useState('');
  const [numberPlayers, setNumberPlayers] = useState(2);
  const [activePlayer, setActivePlayer]=useState(1);
  const [winner, setWinner] = useState('');
  const [playerScore , setPlayerScore] = useState(
                                  {
                                    player1: -1,
                                    player2: -1,
                                    player3: -1,
                                    player4: -1
                                  });

  let select_Player1 = document.querySelector(`.cell${playerScore.player1}Red`);
  let select_Player2 = document.querySelector(`.cell${playerScore.player2}Blue`);
  let select_Player3 = document.querySelector(`.cell${playerScore.player3}Green`);
  let select_Player4 = document.querySelector(`.cell${playerScore.player4}Yellow`);

 
    {select_Player1 && (select_Player1.innerHTML= `<div class="circular red"> </div>`)};
    {select_Player2 && (select_Player2.innerHTML= `<div class="circular blue"> </div>`)};
    {select_Player3 && (select_Player3.innerHTML= `<div class="circular green"> </div>`)};
    {select_Player4 && (select_Player4.innerHTML= `<div class="circular yellow"> </div>`)};
               
  const startGame =() => {
    setStart(true);
  }

  const onPlayerSelect =(term) => {
    setNumberPlayers(term);
  }


  const PlayersScoreCalc = (score) => {
 
    if(score < 16){
      activePlayer=== 1 && setPlayerScore({...playerScore, player1: score});
      activePlayer=== 2 && setPlayerScore({...playerScore, player2: score});
      activePlayer=== 3 && setPlayerScore({...playerScore, player3: score});
      activePlayer=== 4 && setPlayerScore({...playerScore, player4: score});
      {select_Player1 && (select_Player1.innerHTML=`<div> </div>`)};
      {select_Player2 && (select_Player2.innerHTML=`<div> </div>`)};
      {select_Player3 && (select_Player3.innerHTML=`<div> </div>`)};
      {select_Player4 && (select_Player4.innerHTML=`<div> </div>`)};
    }
    if(score ===15){
      setStart(false);
      setWinner(activePlayer);
      return;
    }
    
    activePlayer=== parseInt(numberPlayers) ? setActivePlayer(1) : setActivePlayer(activePlayer+1);
  }


  const resetGame = () => {
    setNumberPlayers(2);
    setStart(false);
    setActivePlayer(1);
    setWinner('');
    setPlayerScore({                           
            player1: -1,
            player2: -1,
            player3: -1,
            player4: -1
          });
    {select_Player1 && (select_Player1.innerHTML=`<div> </div>`)};
    {select_Player2 && (select_Player2.innerHTML=`<div> </div>`)};
    {select_Player3 && (select_Player3.innerHTML=`<div> </div>`)};
    {select_Player4 && (select_Player4.innerHTML=`<div> </div>`)};
    document.querySelector('.sortOrder').innerHTML='<select className="sortOrder" onChange= {e => setNumberPlayers(e.target.value)}> <option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
  }


  return (
    
    <div className="grid-container">
      <header className="header">
        <div> <button type="button" className="button" onClick={resetGame}>Reset</button></div>
        <div style={{color : "green", fontSize: "3rem", fontWeight: "bolder"}}>Snake and ladder Game</div>
        <div> <button type="button" className="button" onClick={startGame}>Start</button></div>
      </header>

      <main className="main">
        <Gamegrid 
          startFlag={start} 
          totalPlayerSelect={onPlayerSelect} 
          players={numberPlayers} 
          score={playerScore}
          ScoreCalc ={PlayersScoreCalc}
          activePlayer={activePlayer}
          winner={winner}
          />
          
      </main>

      <footer className="footer">
        <div>players will be unlocked after rolling first 1</div>
      </footer>
    </div>

  );
}

export default App;
