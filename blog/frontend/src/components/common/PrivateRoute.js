import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ( props) => {
    let route = null;

    if (props.loading) {
        return(
            <h2>loading...please wait</h2>
        );
    }
    else if (!props.auth) {
        route = <Route
                    path={props.path}
                    exact
                    component={props.defaultComponent}
                />
        //console.log("Not authenticated!")
    }
    else {
        route = <Route
                    path={props.path}
                    exact
                    component={props.component}
                />
        //console.log("Authenticated")
    }
    return (route);
}

export default PrivateRoute;