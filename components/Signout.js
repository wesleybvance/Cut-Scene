import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function Signout() {
  return (
    <div><Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>Sign Out</Button>
    </div>
  );
}
