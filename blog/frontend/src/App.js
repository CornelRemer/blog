import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Layout from './containers/Layout/Layout';
import Hoc from './hoc/hoc';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Hoc>
                    <Layout />
                </Hoc>
            </BrowserRouter>
        )
    }
}

export default App;