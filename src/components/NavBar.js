import React from 'react';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import logo from "../assets/logo.png"

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>

                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={logo} height="45" alt="Taskify logo" />
                    <span
                        className="ml-2 font-weight-bold d-none d-md-block"
                        style={{ fontSize: "2rem", fontFamily: "Noto Serif" }}
                    >
                        Taskify
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#home">
                                <i class="fa-solid fa-house"></i> Home
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#tasks">
                                <i class="fa-solid fa-square-check"></i> Tasks
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#events">
                                <i class="fa-solid fa-calendar-days"></i> Events
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#habits">
                                <i class="fa-solid fa-repeat"></i> Habits
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#notes">
                                <i class="fa-solid fa-clipboard"></i> Notes
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;