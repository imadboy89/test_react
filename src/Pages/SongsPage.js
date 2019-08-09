import React from 'react';
import { Form,Button,Col,Row,Alert,ListGroup   } from 'react-bootstrap';
import Songs from "../libs/Songs";
import Auth from "../libs/Auth";

class songsComp extends React.Component {
  constructor(props) {
    super(props);
    this.Songs = new Songs();
    this.Auth = new Auth();
    this.state = {
      Songs : this.Songs.Songs_list,
    }
    this.Songs.getSongs().then( output => {
      if(output == undefined){
        this.props.history.push("/Login");
        return;
    }
      if (output.status===401){
        this.props.history.push("/Login");
        return;
      }
        this.setState({Songs:output});
    });
  }
  renderAlert(){
    if (this.Auth. error && this.Auth.error!=""){
      return <Alert variant="danger">{this.Auth.error}</Alert>;
    }
  }
  songs(){
    if (!this.state.Songs){
      return;
  }
    const list_rend = this.state.Songs.map((song, key) =>
    <ListGroup.Item key={song.id}>{song.title}</ListGroup.Item>
        );
    return list_rend;
  }
  render() {
    console.log(111)
    return (
      <Row>
        <Col xs="4"><h3></h3></Col>
        <ListGroup>{this.songs()}</ListGroup>
        <Col xs="4"><h3></h3></Col>
        
    </Row>
    )
  }
}

export default songsComp;
