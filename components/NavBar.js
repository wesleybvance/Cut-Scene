/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import Logo from './Logo';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link passHref href="/">
            <Navbar.Brand><Logo /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
              <Link passHref href="/">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link passHref href="/team">
                <Nav.Link>Film Crew</Nav.Link>
              </Link>
              <Link passHref href="/team/new">
                <Nav.Link>Add A Member</Nav.Link>
              </Link>
              <Button variant="outline-dark" onClick={signOut}>Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
