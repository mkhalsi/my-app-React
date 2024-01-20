import React from 'react';
import {Nav,Navbar,Container,NavDropdown}from 'react-bootstrap'
import './Navs.css'
import logo from './../../assests/logo.png'
const Navs=() =>{
    return (
<Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">
    <img src={logo} title="logo"></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#AboutUs">About Us</Nav.Link>
      <Nav.Link href="#Explore">Explore Foods</Nav.Link>
      <Nav.Link href="#Reviews">Reviews</Nav.Link>
      <Nav.Link href="#FQS">FQS</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" id ="lastnav">23323234</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
 export default Navs 