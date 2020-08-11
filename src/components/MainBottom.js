import React from "react";
import CircleColorSet from "./CircleColorSet";
import Dice from "./Dice";

function MainBottom(props) {
    return (
        <div className="main_bttom">
            <div className="CircleColorSet">
                <CircleColorSet numberOfPlayers={props.players_number} /> 
                <div className="activeColor">
                    <div className="activeBox">{props.activePlayer === 1 ? '⇧' : ''}</div>
                    <div className="activeBox">{props.activePlayer === 2 ? '⇧' : ''}</div>
                    <div className="activeBox">{props.activePlayer === 3 ? '⇧' : ''}</div>
                    <div className="activeBox">{props.activePlayer === 4 ? '⇧' : ''}</div>
                </div>
                <div style ={{color : "green", fontSize: "1.5rem", fontWeight: "bolder"}}>ActivePlayer</div>    
            </div>
            
            <div style={{color : "green", fontSize: "3rem", fontWeight: "bolder"}}>{props.winner ? `Player ${props.winner} is Winner!!` : ''}</div>
            <div>
                <Dice 
                    startFlag={props.gameStart} 
                    playerScore={props.score} 
                    totalScoreCalc={props.totalScoreCalc}
                    activePlayer={props.activePlayer}
                    />
            </div>
            
        </div>
        
    );
}

export default MainBottom;