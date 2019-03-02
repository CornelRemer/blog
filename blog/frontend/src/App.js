import React, {Component} from 'react';

import Layout from './containers/Layout/Layout';
import Hoc from './hoc/hoc';

class App extends Component {
    render() {
        return (
            <Hoc>
                <Layout>
                    <div>
                        MAIN
                    </div>
                </Layout>
            </Hoc>
        )
    }
}

export default App;