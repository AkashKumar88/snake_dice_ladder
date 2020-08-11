import React from "react";

function CircleColorSet(props){
    return(
        <div>
            
            {parseInt(props.numberOfPlayers)  === 1 
            && <div className="circular red"> </div> }

            {parseInt(props.numberOfPlayers) === 2 
            &&  <>
                    <div className="circular red"> </div> 
                    <div className="circular blue"> </div>
                </>
            }
            {parseInt(props.numberOfPlayers) === 3 
            &&  <>
                    <div className="circular red"> </div> 
                    <div className="circular blue"> </div>
                    <div className="circular green"> </div>
                </>
            }
            {parseInt(props.numberOfPlayers) === 4 
            &&  <>
                    <div className="circular red"> </div> 
                    <div className="circular blue"> </div>
                    <div className="circular green"> </div>
                    <div className="circular yellow"> </div>
                </>
            }
        </div>
        
    );
}

export default CircleColorSet;