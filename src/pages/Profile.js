import React from 'react';
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
const Profile = ({login}) => {
    const history = useHistory();
    if(!login) { history.push('/home')}
    useEffect(()=> {
        if(!login) { history.push('/home')}
    }, [history, login])
    return (
        <div>
            <h2>Profile</h2>
        </div>
    );
};

export default Profile;