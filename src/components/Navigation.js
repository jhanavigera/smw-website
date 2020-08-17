import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src="/SMW_logo.png"
                        alt=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />{' '}
                    Skule Mental Wellness
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-light text-black" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-light text-black" to="/About">About Us</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

