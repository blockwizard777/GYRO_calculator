import React from 'react'
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

import Stake from './view/Stake'

const Path = () => {
    let routes = useRoutes ([
        { path: '/', element: <Stake/> }
    ]);
    return routes;
}

const Routes = () => {
    return (
        <Router>
            <Path/>
        </Router>
    );
}

export default Routes;