import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import './Layout.css';

class Layout extends Component {
    state = {
        showToolbar: false
    }

    toggleToolbarHandler = () => {
        const toggleToolbar = !this.state.showToolbar;
        this.setState({showToolbar: toggleToolbar});
    }

    render () {
        let toolbar = <Toolbar />
        if (!this.state.showToolbar) {
            toolbar = null
        }
        return (
            <div className="Layout">
                {toolbar}
                <button onClick={this.toggleToolbarHandler}>Toggle Toolbar</button>
                <p>Body</p>
                <p>Others</p>
            </div>
        )
    }
}

export default Layout;