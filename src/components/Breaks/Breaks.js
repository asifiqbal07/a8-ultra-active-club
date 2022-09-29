import React from 'react';
import './Breaks.css'

const Breaks = (props) => {
    const {breakTime, handdleAddToBreakTime} = props;
    const{Time} = breakTime;
    return (
        <div className='' >
           <button onClick={()=>handdleAddToBreakTime(breakTime)} className='break-btn'>
            <p>{Time}m</p>
            </button> 
        </div>
    );
};

export default Breaks;