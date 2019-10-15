import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../Redux/Actions/logoutAct";

class Navbar extends Component {
  onLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark danger-color'>
          <Container>
            <Link className='navbar-brand' to='/'>
              RP Management
            </Link>

            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#basicExampleNav'
              aria-controls='basicExampleNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='basicExampleNav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item '>
                  <Link className='nav-link' to='/admin/home'>
                    <b>Home</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/UM'>
                    <b>User Management</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/RM'>
                    <b>Role Management</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/PM'>
                    <b>Permission Management</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/RPM'>
                    <b> RP Management</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/URM'>
                    <b>UR Management</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    to='#'
                    style={{ marginLeft: "120px" }}
                    onClick={this.onLogout}>
                    <b>Logout</b>
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    );
  }
}
export default connect(
  null,
  { logout }
)(Navbar);
