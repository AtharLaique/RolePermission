import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Card, Input, Icon, Select, Button } from "antd";

import "antd/dist/antd.css";
import Navbar from "../../Component/Navbar/navbar";

export default class RM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rname: "",
      des: ""
    };
  }
  Change = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { TextArea } = Input;
    console.log(this.state.des);
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
                title={<h3 className='text-center'>ROLE Management</h3>}>
                {/*Name*/}
                <Input
                  onChange={this.Change}
                  value={this.state.rname}
                  type='rname'
                  name='rname'
                  size='large'
                  placeholder='Role Name'
                  prefix={
                    <Icon
                      type='solution'
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                />
                {/*Description*/}
                <br />
                <br />

                <TextArea
                  name='des'
                  value={this.state.des}
                  onChange={this.Change}
                  placeholder='Enter Description Herer'
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
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
                        <th scope='col'>RoleName</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Admin</td>
                        <td>Admin can acess any thing</td>
                        <td>
                          <h5>
                            <Icon type='edit' style={{ color: "blue" }} />
                          </h5>
                        </td>
                        <td>
                          <h5>
                            <Icon type='delete' style={{ color: "red" }} />
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>2</th>
                        <td>User</td>
                        <td>User Can't Access</td>
                        <td>
                          <h5>
                            <Icon type='edit' style={{ color: "blue" }} />
                          </h5>
                        </td>
                        <td>
                          <h5>
                            <Icon type='delete' style={{ color: "red" }} />
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
