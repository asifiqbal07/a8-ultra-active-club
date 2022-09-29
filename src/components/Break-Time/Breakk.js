import React from 'react';
import './Breakk.css'

const Breakk = (props) => {
    const {breakTimes} = props;
    const {id, Time} = breakTimes;
   
    let test = 0;
    
    for (const breakTime of breakTimes) {
        
        test = breakTime.Time;
        
    }
    
    return (
        <div>
           <div className='break-time'>
                    <h4>Break time:</h4>
                    <h5>{test}m</h5>
                </div> 
        </div>
    );
};

export default Breakk;