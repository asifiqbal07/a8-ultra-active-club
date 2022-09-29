import React from 'react';
import Break from '../Break/Break';
import './Breaks.css'

const Breaks = () => {
    const breakTimes = [1,2,3,4,5];
    const addBreakTime = () => {
        console.log(breakTimes);
    }
    return (
        <div>
            <h2>Add A Break</h2>
            <div className='test'>
            {
                breakTimes.map(breakTime=> <Break
                key={breakTime}
                breakTime={breakTime}
                ></Break>)
            }
            </div>
        </div>
    );
};

export default Breaks;