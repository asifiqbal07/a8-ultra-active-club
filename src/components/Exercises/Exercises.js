import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import './Exercises.css'
import Breaks from '../Breaks/Breaks';
import Breakk from '../Break-Time/Breakk';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [sidebar, setSidebar] = useState([]);
    const [breakTimes, setBreakTimes] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    useEffect(() => {
        fetch('break.json')
            .then(res => res.json())
            .then(data => setBreakTimes(data))
    }, [])

    const handdleAddToSidebar = (exercise) => {
        console.log(exercise);
        const newSidebar = [...sidebar, exercise]
        setSidebar(newSidebar);
    }

    const handdleAddToBreakTime = (breakTime) => {
        console.log(breakTime);
        // const newBreakTimes = [...breakTimes, breakTime]
        // setSidebar(newBreakTimes);
    }

    return (
        <div className='main'>
            <div className='exercises'>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handdleAddToSidebar={handdleAddToSidebar}
                    ></Exercise>)
                }
            </div>
            <div className='main-sidebar'>
                <div className='sidebar'>
                    <Profile></Profile>
                    <h2>Add A Break</h2>
                    <div className='breaks-section'>
                        {
                            breakTimes.map(breakTime => <Breaks
                                key={breakTime.id}
                                breakTime={breakTime}
                                handdleAddToBreakTime={handdleAddToBreakTime}
                            ></Breaks>)
                        }
                    </div>
                    <Details
                        sidebar={sidebar}
                    ></Details>
                    <Breakk
                        breakTimes={breakTimes}
                    ></Breakk>
                    <div className='btn'>
                        <button>Activity Completed</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Exercises;