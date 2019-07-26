import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar sticky="top" className="justify-content-around p-3" style={{background: '#bce6b4'}}>
      <Navbar.Brand href='/'>Think It Over</Navbar.Brand>
      <Nav>
        <Nav.Link href='/my_list'>My List</Nav.Link>
        <Nav.Link href='/new'>Add an Item</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;