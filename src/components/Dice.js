import React, { useState, useEffect } from 'react';

function Dice(props) {
    const [dice, setDice] = useState(1);
    const [playerStatus, setPlayerStatus] = useState({
                                                player1: false,
                                                player2: false,
                                                player3: false,
                                                player4: false
                                            }); 
    useEffect(() => {
        {props.startFlag === false && setPlayerStatus({player1: false,player2: false,player3: false,player4: false})};
    },[props.startFlag]);

    const rollDice =(event) => {
        let score
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber === 1 && playerStatus.player1=== false && props.activePlayer === 1){
            setPlayerStatus({...playerStatus, player1: true});
            score = props.playerScore.player1 + randomNumber;

        }else if(randomNumber === 1 && playerStatus.player2=== false && props.activePlayer === 2){
            setPlayerStatus({...playerStatus, player2: true});
            score = props.playerScore.player2 + randomNumber;
        }else if(randomNumber === 1 && playerStatus.player3=== false && props.activePlayer === 3){
            setPlayerStatus({...playerStatus, player3: true});
            score = props.playerScore.player3 + randomNumber;
        }else if(randomNumber === 1 && playerStatus.player4=== false && props.activePlayer === 4){
            setPlayerStatus({...playerStatus, player4: true});
            score = props.playerScore.player4 + randomNumber;
        }
        
        if(props.activePlayer === 1 && playerStatus.player1){
            score = props.playerScore.player1 + randomNumber;
        }else if(props.activePlayer === 2 && playerStatus.player2){
            score = props.playerScore.player2 + randomNumber;
        }else if(props.activePlayer === 3 && playerStatus.player3){
            score = props.playerScore.player3 + randomNumber;
        }else if(props.activePlayer === 4 && playerStatus.player4){
            score = props.playerScore.player4 + randomNumber;
        }
        setDice(randomNumber);       
        props.totalScoreCalc(score);
    }
        

    return (
    <div>
        {props.startFlag 
        ? 
          <div>
              <div>
                <img className="dice_image dice_box" src={`/images/dice-${dice}.png`} alt={`dice-${dice}`} onClick={rollDice}></img>
              </div>
              
              <div style = {{color : "red", fontSize: "2rem", fontWeight: "bolder"}}>Roll Dice</div>
          </div>  
          
        : <div style ={{color : "red", fontSize: "2rem", fontWeight: "bolder"}}>Click on Start button</div>
        }
        
    </div>
    
    );
}

export default Dice;