import React from 'react';
import './Breakk.css'

const Breakk = (props) => {
    const {breakTimes} = props;

    
    return (
        <div>
           <div className='break-time'>
                    <h4>Break time:</h4>
                    <h5>{breakTimes.Time}m</h5>
                </div> 
        </div>
    );
};

export default Breakk;