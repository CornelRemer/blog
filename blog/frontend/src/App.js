import React, {Component} from 'react';
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