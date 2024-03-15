import React from "react";
import Navbar1 from "../components/navbar1/Navbar1";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const RootLayout = () => {
  return (
    <div>
      <Navbar1 />
      <div className="bg-black text-white">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default RootLayout;
