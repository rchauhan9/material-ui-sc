import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from "./config/history";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Photos from "./pages/Photos";
import NavBar from "./menu/NavBar";

const App = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" exact component={Users} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/photos" exact component={Photos} />
            </Switch>
        </Router>
    )
}

export default App;