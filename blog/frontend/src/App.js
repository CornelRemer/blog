import React, {Component} from 'react';
//import './index.css';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout/Layout';

class App extends Component {
    render() {
        return (
            <Layout />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));