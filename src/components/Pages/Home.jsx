import React from 'react';
import './Pages.css';
import { Card, Button } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
    <Card>
      <Card.Header as="h3">Home</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Welcome To My Profile!</Card.Title>
        <Card.Text as="h5">
          This is my new website application created using ReactJS.
          <br />
          <br />
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          If you think math is hard, try web design.
        </p>
        <footer className="blockquote-footer">
         <cite title="Source Title">Trish Parr</cite>
        </footer>
      </blockquote>
    </Card.Body>
    </Card>
    </>
  );
}

export default Home;