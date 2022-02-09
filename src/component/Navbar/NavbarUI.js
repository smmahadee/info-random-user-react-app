import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavbarUI() {
  return (
    <div>
      <Navbar expand='lg' variant='light' bg='light'>
        <Navbar.Brand className='text-center' href='#'>
          <h2>Random User </h2>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
