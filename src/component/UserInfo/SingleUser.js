import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function SingleUser({ userData, onDelete }) {
  const { first_name, last_name, email, avatar } = userData;
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
      <Card.Img variant='top' src={avatar} />
      <Card.Body>
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
}
