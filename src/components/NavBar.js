import React from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container fluid>

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
                    <Nav className="mr-auto text-right">
                        <NavLink href="#home">
                            <i class="fa-solid fa-house"></i> Home
                        </NavLink>
                        <NavLink href="#Tasks">
                            <i class="fa-solid fa-square-check"></i> Tasks
                        </NavLink>
                        <NavLink href="#Events">
                            <i class="fa-solid fa-calendar-days"></i> Events
                        </NavLink>
                        <NavLink href="#Habits">
                            <i class="fa-solid fa-repeat"></i> Habits
                        </NavLink>
                        <NavLink href="#Notes">
                            <i class="fa-solid fa-clipboard"></i> Notes
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;