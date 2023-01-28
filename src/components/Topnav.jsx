
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import getNavItems from '../services/services';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => setNavItems(getNavItems()), []);


  return (
    <Navbar expanded={expanded} className="navbar-dark" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>JTank</Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav"
          onClick = {() => setExpanded(expanded ? false : "expanded")}
          />
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navItems.map((item, index) =>
                <Nav.Link key={index} 
                to={item.path} 
                onClick={() => setExpanded(false)}>
                {item.title} </Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;