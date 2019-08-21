import React from 'react';
import { Link } from 'react-router-dom';
import { Form,Button,Col,Row,Alert   } from 'react-bootstrap';

import {AuthContext} from '../libs/AuthContx';
 
class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    
    return (

      <AuthContext.Consumer>
        {(Auth)=>(<div>
                <div>Home page</div>
                <div>_{Auth.isAuth?"true":"false"}_</div>
                
                <Button onClick={() => {if(Auth.logOut()){this.history.push("/Login")} } }>logout</Button>
                <Link to="/About">About</Link>
                <Link to="/Login">Login</Link>
              </div>
        )}
    </AuthContext.Consumer>
    )
  }
}

export default Home;
