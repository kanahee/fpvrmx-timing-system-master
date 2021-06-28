import React from 'react';
import './App.css';
import logo from './assets/terrariamxlogo.png';
import logofpvrmx from './assets/fpvrmxlogo.png';
import Container from 'react-bootstrap/Container';
import { Row, Col, ListGroup, Navbar, NavDropdown, Form, FormControl, Button, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <p>
      <div class="titan-background">
        
      <span class="stars stars-L"></span>
      <span class="stars stars-M"></span>
      <span class="stars stars-S"></span>
      
    </div>
    
    

    <div class="marvellous-container">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Timing System v0.1</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Dashboard</Nav.Link>
        <Nav.Link href="#link">Tracks</Nav.Link>
          <NavDropdown title="Races" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pilots</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tracks</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Calendar</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <div class="header">

<br /><br />

        <h1><span class="title-studios">Timing System</span> </h1> 
        <img src={logofpvrmx} alt="fpvrmxlogo" />
        <h4>
          FPV Racing Mexico Tools
        </h4>
      </div>
      <div class="listgroup">
        
        <Container>
          <Row>
            <Col>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <h3>Register!</h3>
              <br />
              <form>
               
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                </div>
               
                <div class="mb-3">
                  <label for="InputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword1" /> 
                </div>
               
                
               
                <button type="submit" class="btn btn-primary">Submit</button>
              
              </form>
            </Col>
            <Col></Col>
            <Col>
              <h3>New Features!</h3>
              <br />
              <ListGroup>
                <ListGroup.Item>Manual Lap Timer</ListGroup.Item>
                <ListGroup.Item>Organization Registration</ListGroup.Item>
                <ListGroup.Item>Leaderboards v0.1</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="usage-instructions">
        <h3>Instructions</h3>
        <span><code>Step #1</code></span>
      </div>
      <div class="footer">
        <img src={logo} alt="terrariamxlogo" />
        <p>
          Copyright 2021 - TerrariamX <br />
        </p>
      </div>
    </div>
    </p>
  );
}

export default App;
