import React, { useEffect, useState } from 'react';

function Timmer(props) {
    const [seconds, setSeconds] = useState(5);

        useEffect(() => {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
              } else {
                setSeconds(5);
              }
       
        });

    return (
  
        <div className="timmer">
            {seconds}
        </div>
    );
  }
  
  export default Timmer;