import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Card, Input, Icon, Select, Button } from "antd";

import "antd/dist/antd.css";
import Navbar from "../../Component/Navbar/navbar";
const COUNTRY = ["PAKISTAN", "INDIA", "CHINA", "US"];
const CITY1 = ["LAHORE", "ISLAMBAD", "OKARAH", "KARACHI"];
const CITY2 = ["GUJRAT", "DIHLI", "KANPOOR"];
const CITY3 = ["ABC", "DEF", "GH", "LI"];
const CITY4 = ["CHIKAGO", "LOSSANGLESS", "WTC"];
export default class UM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      country: "",
      city: "",
      CITYOPTION: []
    };
  }
  Change = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  Country = e => {
    this.setState({ country: e });
    if (e == "PAKISTAN") {
      this.setState({
        city: "",
        CITYOPTION: CITY1
      });
    } else if (e == "INDIA") {
      this.setState({
        city: "",
        CITYOPTION: CITY2
      });
    } else if (e == "CHINA") {
      this.setState({
        city: "",
        CITYOPTION: CITY3
      });
    } else if (e == "US") {
      this.setState({
        city: "",
        CITYOPTION: CITY4
      });
    }
  };
  City = e => this.setState({ city: e });

  render() {
    console.log(this.state.CITYOPTION);
    const filteredCountry = COUNTRY.filter(
      o => !this.state.country.includes(o)
    );
    const filteredCity = this.state.CITYOPTION.filter(
      o => !this.state.city.includes(o)
    );
    console.log(this.state.country);
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
              <br />
              <br />
              <Card
                className='example z-depth-2'
                title={<h3 className='text-center'>User Management</h3>}>
                {/*Name*/}
                <Input
                  onChange={this.Change}
                  value={this.state.name}
                  type='name'
                  name='name'
                  size='large'
                  placeholder='Enter Your Name'
                  prefix={
                    <Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                {/*Email*/}
                <br />
                <br />
                <Input
                  onChange={this.Change}
                  value={this.state.email}
                  type='email'
                  name='email'
                  size='large'
                  placeholder='Enter Your Email'
                  prefix={
                    <Icon type='mail' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                {/*Paasword*/}
                <br />
                <br />
                <Input
                  onChange={this.Change}
                  value={this.state.password}
                  type='password'
                  name='password'
                  size='large'
                  placeholder='Enter Your Password'
                  prefix={
                    <Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                {/*country*/}
                <br />
                <br />
                <Select
                  type='country'
                  name='country'
                  size='large'
                  placeholder='Choose Country'
                  onChange={this.Country}
                  style={{ width: "100%" }}>
                  {filteredCountry.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>

                {/*city*/}
                <br />
                <br />
                <Select
                  type='city'
                  name='city'
                  size='large'
                  placeholder='Choose City'
                  onChange={this.City}
                  style={{ width: "100%" }}>
                  {filteredCity.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
                <br />
                <br />
                <Button
                  type='danger'
                  block
                  size='large'
                  onClick={this.onAdminLogin}>
                  SAVE
                </Button>
              </Card>
            </Col>
            <Col lg={5}>
              <br />
              <br />
              <Card className='example z-depth-2'>
                <div class='table-responsive'>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Athar Laique</td>
                        <td>athar@gmail.com</td>
                        <td>
                          <h5>
                            <Icon type='edit' style={{ color: "blue" }} />
                          </h5>
                        </td>
                        <td>
                          <h5>
                            <Icon type='delete' style={{ color: "red" }}/>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>2</th>
                        <td>Arslan Maqsood</td>
                        <td>arslan@gmail.com</td>
                        <td>
                          <h5>
                            <Icon type='edit' style={{ color: "blue" }} />
                          </h5>
                        </td>
                        <td>
                          <h5>
                            <Icon type='delete' style={{ color: "red" }}/>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
