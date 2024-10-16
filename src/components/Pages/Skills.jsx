import React from 'react';
import './Pages.css';
import { Card, Button } from 'react-bootstrap';

export const Skills = () => {
  return (
    <>
    <Card>
      <Card.Header as="h3">My Skills</Card.Header>
      <Card.Body>
        <Card.Text>
          <h2><b>Programming:</b></h2>
              <h4><li> Java </li>
              <li> Python </li></h4>
              <br />
          <h2><b>Web-Development:</b></h2>
              <h4><li> HTML & CSS </li>
              <li> JavaScript </li></h4>
              <br />
          <h2><b>Database Management:</b></h2>
              <h4><li> SQL </li>
              <li> PHP </li></h4>
              <br />
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Skills