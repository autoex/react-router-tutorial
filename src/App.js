import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import {useState} from "react";

const App = () => {

  const [login, setLogin] = useState(false);
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
              <button onClick={()=>setLogin(!login)} type="button" className="btn btn-info mb-3">{login ? 'Log out' : 'Login'}</button>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/post/:id?'} component={Post}/>
                    <Route  component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;