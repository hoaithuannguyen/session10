import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    return (
        <>
            {" "}
            <Navbar bg="dark">
                <Container>
                    <Link>Navbar</Link>
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/price">Pricing</NavLink>
                        <NavLink to="/login">Login</NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
