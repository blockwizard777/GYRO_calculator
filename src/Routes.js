import React from 'react'
import { number } from 'prop-types';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

import Stake from './view/Stake'

const Path = ({gyroBalance}) => {
    let routes = useRoutes ([
        { path: '/', element: <Stake gyroBalance={gyroBalance}/> }
    ]);
    return routes;
}

Path.propTypes = {
    gyroBalance: number.isRequired
}

const Routes = ({gyroBalance}) => {
    return (
        <Router>
            <Path gyroBalance={gyroBalance}/>
        </Router>
    );
}

Routes.propTypes = {
    gyroBalance: number.isRequired
}

export default Routes;