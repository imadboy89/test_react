import React from 'react';
import { Link } from 'react-router-dom';
import { Form,Button,Col,Row,Alert   } from 'react-bootstrap';
import Auth from "../libs/Auth";
function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data);
}
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.Auth = new Auth();
    this.state = {
      error : this.Auth.error,
      isAuth : this.Auth.isAuth
    }
    this.checkAuth();
  }
  checkAuth(){
    if (this.Auth.isAuth){
      this.props.history.push("/");
    }
  }
  submitLogin(event){
    event.preventDefault()
    
    let data = new FormData(event.target);
    data = stringifyFormData(data);
    this.Auth.error ="" ;
    this.Auth.isAuth =false ;
    this.setState({});
    this.Auth.login(data).then(output =>{
      this.setState({});
      this.checkAuth();
    });
    
    
  }
  renderAlert(){
    let errorMsg = this.Auth.error+ "" ;
    if (this.Auth. error && this.Auth.error!=""){
      return (<Alert variant="danger">{errorMsg}</Alert>);
    }
  }
  render() {
    
    return (
      <Row>
        <Col xs="4"><h3></h3></Col>
        <Col xs="3"><h3>Login</h3></Col>
        <Col xs="4"><h3></h3></Col>

        <Col xs="3"/>
        <Col xs="6">
          <Form onSubmit={this.submitLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name="username" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            {this.renderAlert()}
            <Button variant="primary" type="submit" className="m-auto col-2">
              Submit
            </Button>
          </Form>
      </Col>
      <Col xs="3"/>
    </Row>
    )
  }
}

export default LoginForm;
