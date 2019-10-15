import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
//@Custome component
import Login from "./Pages/Landing/Login";
import Home from "./Pages/Admin/Home";
import UM from "./Pages/Admin/UM";
import RM from "./Pages/Admin/RM";
import PM from "./Pages/Admin/PM";
import RPM from "./Pages/Admin/RPM";
import URM from "./Pages/Admin/URM";
//@Private Route

import PrivateRoute from "./PrivateRoute/PrivateRoute";
//Redux
import { connect } from "react-redux";

function App(user) {
  console.log(user.user.isAuth);
  if (!user.user.isAuth) {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute path='/admin/home' component={Home} />
              <PrivateRoute path='/admin/UM' component={UM} />
              <PrivateRoute path='/admin/RM' component={RM} />
              <PrivateRoute path='/admin/PM' component={PM} />
              <PrivateRoute path='/admin/RPM' component={RPM} />
              <PrivateRoute path='/admin/URM' component={URM} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else if (user.user.isAuth) {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <PrivateRoute path='/admin/home' component={Home} />
              <PrivateRoute path='/admin/UM' component={UM} />
              <PrivateRoute path='/admin/RM' component={RM} />
              <PrivateRoute path='/admin/PM' component={PM} />
              <PrivateRoute path='/admin/RPM' component={RPM} />
              <PrivateRoute path='/admin/URM' component={URM} />
              <Redirect from='/' to='/admin/home' />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  null
)(App);
