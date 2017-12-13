import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Button, FormGroup, FormControl} from 'react-bootstrap';

const navbarInstance = (
    <Navbar primary collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="">Travoom.com</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="">Link</NavItem>
        <NavItem eventKey={2} href="">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        <Navbar.Form pullRight>
            <FormGroup>
            <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {'   '}
            <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Nav>
    </Navbar>
);

const NavBar = () => {
  return (
    <nav>
        {navbarInstance}
    </nav>
  )
}

export default NavBar;