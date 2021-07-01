import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route  component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;