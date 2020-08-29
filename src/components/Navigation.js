import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navigation.css'
export class Navigation extends Component {
    render() {
        return (
            <Navbar className="nav-color" expand="lg">
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
                        <NavLink className="d-inline p-2" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2" to="/About">Our Team</NavLink>
                        <NavLink className="d-inline p-2" to="/MentalResources">Mental Health Resources</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

