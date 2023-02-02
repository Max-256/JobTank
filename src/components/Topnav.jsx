

import { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import getNavItems from '../services/services';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => setNavItems(getNavItems()), []);


  return (
    <Navbar expanded={expanded} sticky="top" className="navbar-dark" bg="light" expand="lg">
      <Container>
        <Link to="/"
          className='logo' 
          onClick={() => setExpanded(false)}>JobTank</Link>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav"
          onClick = {() => setExpanded(expanded ? false : "expanded")}
          />
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navItems.map((item, index) =>
                <NavLink key={index}
                className='nav-link' 
                to={item.path} 
                onClick={() => setExpanded(false)}>
                {item.title} </NavLink>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;