import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from '../../assets/img/Logo.png';

function Menu() {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
    <img src={Logo} className="d-inline-block align-top" height="30px"/>
    Human vs Plants
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Ações</Nav.Link> */}
      <NavDropdown title="Ações" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cadastrar Plantinha</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Nome da plantinha" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Menu;