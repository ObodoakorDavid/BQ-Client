import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="bg-black text-white">
      <Container>
        <Link className=" text-decoration-none text-white fs-1 p">BQ</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-lg-flex align-items-center gap-2 justify-content-around w-100">
            <div className="d-flex flex-column flex-lg-row gap-2">
              <Link className=" text-decoration-none text-white">Home</Link>
              <Link className=" text-decoration-none text-white">Spaces</Link>
              <Link className=" text-decoration-none text-white">Answers</Link>
              <Link className=" text-decoration-none text-white">
                Notifications
              </Link>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-2 justify-content-end">
              <Link className=" text-decoration-none text-white">Register</Link>
              <Link className=" text-decoration-none text-white">Sign In</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
