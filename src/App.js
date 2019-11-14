import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav,Navbar, NavDropdown, Form, Button, FormControl, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">A Million Thanks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Table responsive variant="dark" striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>State</th>
      <th>Zip Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Son</td>
      <td>Phan</td>
      <td>500 E. Small Springs Rd</td>
      <td>CA</td>
      <td>92507</td>
    </tr>
    <tr>
      <td>2</td>
      <td>John</td>
      <td>Doe</td>
      <td>123 My Address Avn</td>
      <td>CA</td>
      <td>94123</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Billy</td>
      <td>Bob</td>
      <td>456 Tractor Rd</td>
      <td>OH</td>
      <td>89012</td>
    </tr>
  </tbody>
</Table>
      
  </div>
    // <div>
    //       <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
    // </div>
  );
}

export default App;
