import React, { Component } from "react";
import Navbar from '../../Component/Navbar/navbar';

export default class Home extends Component {
  render() {
    return (
      <div>
              <Navbar />
        <h1 className='text-center'>Welcome Admin</h1>
      </div>
    );
  }
}
