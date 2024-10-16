import { useState } from 'react';
import './Pages.css';

import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/submission', { state: { formData } });
  };

  return (
    <>
    <Card>
      <Card.Header as="h3">Contact</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Email Me!</Card.Title>
        <Card.Text>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInputUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} placeholder="..." value={formData.message} onChange={handleChange} required/>
          </Form.Group>
          
          <br />
          <Button variant="primary" type="submit">Submit</Button>
        </Form>

        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Contact