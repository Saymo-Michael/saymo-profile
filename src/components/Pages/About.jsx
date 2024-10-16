import React from 'react';
import './Pages.css';
import { Card, Button } from 'react-bootstrap';

export const About = () => {
  return (
    <>
    <Card>
      <Card.Header as="h3">About Me</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Hello!</Card.Title>
        <Card.Text as="h5">
        <section class="introduction">
          <br />
            <h3>Introduction</h3>
            <p>
                I am third year student at the University of Cabuyao taking bachelor of science in computer science. My interest in technology has inpsired me to pursue a career in programming, and I am looking forward to the opportunities and challenges that lie ahead.
            </p>
        </section>
        <br /> 
        <section class="interests">
            <h3>Interests & Hobbies</h3>
            <p>
                Aside from my studies, I have an interest in puzzle and strategy games. I enjoy playing mobile games, watching movies, and reading books especially novels and science literature. These are the things that allows me to be creative and helps me relax.
            </p>
        </section>
        <br />
        </Card.Text>
        <Button variant="primary">Facebook Link</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default About