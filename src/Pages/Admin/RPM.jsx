import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Card, Input, Icon, Select, Button } from "antd";

import "antd/dist/antd.css";
import Navbar from "../../Component/Navbar/navbar";
const ROLE = ["R1", "R2", "R3", "R4"];
const PERMISSION = ["P1", "P2", "P3", "P4"];

export default class UM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      permission: "",
    };
  }
  
  Role = e => this.setState({ role: e });
  Permission = e => this.setState({ city: e });

  render() {
    let filteredRole = ROLE.filter(
      o => !this.state.role.includes(o)
    );
    let filteredPermission = PERMISSION.filter(
      o => !this.state.permission.includes(o)
    );
   
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
                title={<h4 className='text-center'>Role-Permission Management</h4>}>
                {/*Role*/}
                <Select
                  type='role'
                  name='role'
                  size='large'
                  placeholder='Choose any Role'
                  onChange={this.Role}
                  style={{ width: "100%" }}>
                  {filteredRole.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>

                {/*Permission*/}
                <br />
                <br />
                <Select
                  type='permission'
                  name='permission'
                  size='large'
                  placeholder='Choose Permission'
                  onChange={this.Permission}
                  style={{ width: "100%" }}>
                  {filteredPermission.map(item => (
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
                        <th scope='col'>Role</th>
                        <th scope='col'>Permission</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>R1</td>
                        <td>P1</td>
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
                        <td>R2</td>
                        <td>P2</td>
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
