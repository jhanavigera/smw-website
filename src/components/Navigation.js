import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../css/Navigation.css'

export class Navigation extends Component {
    render() {
        return (
            <Navbar className="nav-color" expand="lg">
                <Navbar.Brand href="/">
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
                    <Nav className="ml-auto" style={{marginRight: '2.5rem'}}>
                        <NavLink className="d-inline p-2 menu-link" to="/">Home</NavLink>
                        {/*
                            commented out the our team page(to be added in after edits):
                            <NavLink className="d-inline p-2 menu-link" to="/About">Our Team</NavLink>
                        */}
                        <NavLink className="d-inline p-2 menu-link" to="/blog">Blog</NavLink>
                        <NavLink className="d-inline p-2 menu-link" to="/MyFailureStory">My Failure Story</NavLink>

                        <NavDropdown title="Resources" className="menu-link">
                            <NavDropdown.Item href="/MentalResources">Mental Health Resources</NavDropdown.Item>
                            <NavDropdown.Item href="/AcademicResources">Academic Resources</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

