import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio Page</h1>
    <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
    <NavLink exact to="/portfolio" activeClassName="is-active">Portfolio </NavLink>
    <NavLink exact to="/contact" activeClassName="is-active">contact me </NavLink>
  </header>
);

export default Header;