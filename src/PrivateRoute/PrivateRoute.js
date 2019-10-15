import React from "react";
import { Route, Redirect } from "react-router-dom";

//@------
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.isAuth) {
          return <Redirect to='/' />;
        } else if (auth.isAuth) {
          return <Component {...props} />;
        }
      }}
    />
  );
};
const mapStateToProps = state => ({
  auth: state.user
});
export default connect(mapStateToProps)(PrivateRoute);
