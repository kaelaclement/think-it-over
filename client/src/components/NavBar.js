import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/' exact>Intro</NavLink>
      <NavLink to='/new' exact>Add an Item</NavLink>
      <NavLink to='/my_list' exact>My List</NavLink>
    </div>
  )
}

export default NavBar;