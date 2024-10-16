import { useState } from 'react';
import './Pages.css';
import { Card, Button, Form } from 'react-bootstrap';

export const Contact = () => {


  return (
    <>
    <Card>
      <Card.Header as="h3">Contact</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Email Me!</Card.Title>
        <Card.Text>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="..."/>
          </Form.Group>
        </Form>
        </Card.Text>

        <br />
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Contact