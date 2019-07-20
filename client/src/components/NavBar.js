import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar sticky="top" className="justify-content-around">
      <Nav>
        <Nav.Link href="/">Think It Over</Nav.Link>
        <Nav.Link href='/new'>Add an Item</Nav.Link>
        <Nav.Link href='/my_list'>My List</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;