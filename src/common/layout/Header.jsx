import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <Navbar bg={'dark'}>
      <Navbar.Brand >Personas</Navbar.Brand>
      <Nav className={'mr-auto'}>
        <div className='nav-link'>
          <Link to={'/'}>Ver</Link>
        </div>
        <div className='nav-link'>
          <Link to={'/addElement'}>Añadir</Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;