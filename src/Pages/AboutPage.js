import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div>About page</div>
      <Link to="/">HomePage</Link>
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default About;
