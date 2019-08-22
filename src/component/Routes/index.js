import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";
import Dashboaed from "../Dashboard";
import { connect } from "react-redux";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Routers extends Component {
    render() {
        const {user} = this.props;
    return (
      <Router>
        <Route path="/" exact component={App} />
        <RestrictedRoute path="/dashboard" component={Dashboaed} authUser={user} />
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Routers);
