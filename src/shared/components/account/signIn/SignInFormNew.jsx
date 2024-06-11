import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LockScreenForm from '@/shared/components/account/signIn/components/LockScreenForm';
import styled from 'styled-components';

const LockScreen = () => {
  const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Nav className="ms-auto">
            <LockScreenForm />
          </Nav>
        </Container>
      </Navbar>
      <ContentDiv></ContentDiv>
    </>
  );
};

export default LockScreen;

const ContentDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/bg-image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
`;
