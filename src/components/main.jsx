import React from 'react';
import './main.css';

import logo from '../logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Submission from './Submission/SubmissionSuccess';

export const Main = () => {
  return (
    <div className='Main'>
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark">
        <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand>MyProfile</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>  
      </Navbar>
      
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/skills" Component={Skills} />
        <Route path="/contact" Component={Contact} />
        <Route path="/submission" Component={Submission} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Main