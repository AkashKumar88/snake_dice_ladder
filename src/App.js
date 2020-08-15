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
    document.querySelector('.sortOrder').innerHTML='<select className="sortOrder" onChange= {e => setNumberPlayers(e.target.value)}> <option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
  }


  return (
    
    <div className="grid-container">
      <header className="header">
        <div> <button type="button" className="button" onClick={resetGame}>Reset</button></div>
        <div>Snake and ladder Game</div>
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
