import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
        <Nav.Link as={NavLink}  to="/songs">Songs</Nav.Link>
        <Nav.Link as={NavLink}  to="/Artists">Artists</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  )
}

export default NavBar;