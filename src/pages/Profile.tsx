import React from 'react';
import {Link, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom'
import {useEffect} from 'react'
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

type  ProfileProps = {
        login: boolean
}

const Profile = ({login}:ProfileProps) => {
    const history = useHistory();
    if (!login) {
        history.push('/home')
    }
    useEffect(() => {
        if (!login) {
            history.push('/home')
        }
    }, [history, login])
    const {path, url} = useRouteMatch();


    return (
        <div>
            <h2>Profile</h2>

            <ul>
                <li>
                    dd<Link to={`${url}/viewprofile`}>View profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit profile</Link>

                </li>
            </ul>
            <Switch>
                <Route path={`${path}//viewprofile`} component={ViewProfile}/>
                <Route path={`${path}//editprofile`} component={EditProfile}/>
            </Switch>
        </div>
    );
};

export default Profile;