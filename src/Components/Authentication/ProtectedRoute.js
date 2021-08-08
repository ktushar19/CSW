import { render } from "@testing-library/react";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import {Route} from "react-router-dom";

class ProtectedRoute extends Component {
    render() {
        const jwtToken = localStorage.getItem("authorization");
        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => (
                    jwtToken ?
                        <Component {...props} /> :
                        <Redirect to="/" />
                )}
            />
        )
    }
}
export default ProtectedRoute;