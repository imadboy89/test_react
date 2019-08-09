import React from 'react';
import { Form,Button,Col,Row,Alert,ListGroup   } from 'react-bootstrap';
import Artist from "../libs/Artist";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.Artist = new Artist();
    this.state = {
      artists : this.Artist.artist_list,
    }
    this.Artist.getArtists().then( output => {
        console.log(output);
        if(output == undefined){
            this.props.history.push("/Login");
            return;
        }
        if (output && output.status===401){
            this.props.history.push("/Login");
            return;
          }
        this.setState({artists:output});
        console.log(this.Artist.error);
    });
  }
  renderAlert(){
    if (this.Auth. error && this.Auth.error!=""){
      return <Alert variant="danger">{this.Auth.error}</Alert>;
    }
  }
  artists(){
      if (!this.state.artists){
          return;
      }
      console.log(this.state.artists);
    const artists_rend = this.state.artists.map((art, key) =>
    <ListGroup.Item key={art.id}>{art.full_name}</ListGroup.Item>
        );
    return artists_rend;
  }
  render() {
    console.log(111)
    return (
        <Row>
            <Col xs="4"><h3></h3></Col>
            <ListGroup>{this.artists()}</ListGroup>
            <Col xs="4"><h3></h3></Col>
        </Row>
    )
  }
}

export default LoginForm;
