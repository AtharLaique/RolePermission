import React, { Component } from "react";
import { Card, Input, Icon, Button, Alert } from "antd";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
//
import { connect } from "react-redux";
import { auth } from "../../Redux/Actions/authAct";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      isValid: false
    };
  }
  Change = async e => this.setState({ [e.target.name]: e.target.value });
  onAdminLogin = () => {
    if (!this.validateEmail(this.state.name)) {
      this.setState({ isValid: true });
    } else if (this.validateEmail(this.state.name)) {
      this.setState({ isValid: false });
      let data = {
        name: this.state.name,
        password: this.state.password
      };
      this.props.auth(data, this.props.history);
    }
  };
  onUserLogin = () => {
    console.log(this.state.name);
  };
  //Isvalid email
  validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  render() {
    return (
      <div>
        <Container>
          <h1
            className='text-center'
            style={{ marginTop: "5%", marginBottom: "3%" }}>
            Role Permission Management
          </h1>
          <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
              <Card
                className='example z-depth-1'
                title={<h3 className='text-center'>Admin Login</h3>}
                bordered={true}
                style={{ width: "99%" }}>
                {/*Form for Login*/}
                {this.state.isValid ? (
                  <Alert
                    style={{ marginBottom: "10px" }}
                    message='Your email is invalid'
                    type='error'
                    showIcon
                  />
                ) : null}
                {this.props.user.error ? (
                  <Alert
                    style={{ marginBottom: "10px" }}
                    message='Un authenticated user'
                    type='error'
                    showIcon
                  />
                ) : null}
                <Input
                  type='email'
                  name='name'
                  value={this.state.name}
                  onChange={this.Change}
                  size='large'
                  placeholder='Enter your email'
                  prefix={
                    <Icon type='mail' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                <br />
                <br />
                <Input
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.Change}
                  size='large'
                  placeholder='Enter your password'
                  prefix={
                    <Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                <br />
                <br />

                <Button
                  type='danger'
                  block
                  size='large'
                  onClick={this.onAdminLogin}>
                  Go
                </Button>
              </Card>
            </Col>
            <Col lg={5}>
              <Card
                className='example z-depth-1'
                title={<h3 className='text-center'>User Login</h3>}
                bordered={true}
                style={{ width: "99%" }}>
                Card content
              </Card>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  { auth }
)(Login);
