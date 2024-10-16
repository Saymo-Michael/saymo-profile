import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const SubmissionSuccess = () => {
    const location = useLocation();
    const { formData } = location.state || {}; 

    return (
        <Card>
            <Card.Header as="h3">Details</Card.Header>
            <Card.Body>
                <Card.Title as="h1">Success!</Card.Title>
                <Card.Text>
                    Thank you, {formData?.username}! Your message has been sent.<br />
                    <br />
                    <strong>Username:</strong> {formData?.username}<br />
                    <strong>Email:</strong> {formData?.email}<br />
                    <strong>Message:</strong> {formData?.message}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SubmissionSuccess;
