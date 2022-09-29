import React from 'react';
import './Profile.css'
import avatar from '../../images/student-5.png'

const Profile = () => {
    return (
        <div className='main-profile'>
            <div className="profile">
                <div>
                    <img src={avatar} alt="" />
                </div>
                <div>
                    <h3>Mr Trainer</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='profile-details'>
                <div>
                    <h3>75kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>25Yrs</h3>
                    <p>Age</p>
                </div>
            </div>
        </div>

    );
};

export default Profile;