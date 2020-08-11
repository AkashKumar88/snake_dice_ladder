import React from "react";
import MainBottom from "./MainBottom";
import Timmer from "./Timmer";

function Game_grid(props){
    const numbers = [15,14,13,12,11,10,9,8,7,6,5,4,0,1,2,3];


    return (
        <div>
            <div className="input_item">         
                Select Number of Players
                <select className="sortOrder" onChange= {e => props.totalPlayerSelect(e.target.value)}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="grid_Timmer_box">
                <div className="ui_grid">
                    {numbers.map(number => <div className="cell" id={`${number}`} key={number}>
                                            <div>{number}</div> 
                                            <div className="colorBox">
                                                <div className={`cell${number}Red`}> </div>
                                                <div className={`cell${number}Blue`}></div>
                                                <div className={`cell${number}Yellow`}></div>
                                                <div className={`cell${number}Green`}></div>
                                            </div> 
                                        </div>)}
                </div>
                <div>{props.startFlag && <Timmer activePlayer={props.activePlayer} time={props.time}/>}</div>

            </div>

            
            <MainBottom 
                players_number={props.players} 
                gameStart={props.startFlag} 
                score={props.score}
                totalScoreCalc ={props.ScoreCalc}
                activePlayer={props.activePlayer}
                winner={props.winner}/>
        
        </div>
    );
}


export default Game_grid;