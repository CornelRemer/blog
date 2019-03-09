import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Layout from './containers/Layout/Layout';
import Hoc from './hoc/hoc';

class App extends Component {
    render() {
        return (
            <Router>
                <Hoc>
                    <Layout />
                </Hoc>
            </Router>
        )
    }
}

export default App;