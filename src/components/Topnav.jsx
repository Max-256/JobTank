
import { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import getNavItems from '../services/navServices';

function TopNav({user}) {
  const [expanded, setExpanded] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => setNavItems(getNavItems()), []);

  return (
    <Navbar expanded={expanded} sticky="top" className="navbar-dark" bg="light" expand="lg">
      <Container>
        <Link to="/"
          className='logo' 
          onClick={() => { 
            setExpanded(false); 
            window.location ="/" }}>JobTank</Link>
        
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

            { user &&                    
              <NavLink to="/logout"
              className='nav-link'
              onClick={() => setExpanded(false)}>Log out
              </NavLink>}

            {!user && 
              <NavLink to="/sign-in" 
              className='nav-link' 
              onClick={() => setExpanded(false)}>Sign in
              </NavLink> }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;