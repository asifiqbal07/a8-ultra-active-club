import React from 'react';
import './Break.css'

const Break = (props) => {
    
    return (
        <div >
           <button className='break-btn'>
            <h5>{props.breakTime}</h5>
            </button> 
        </div>
    );
};

export default Break;