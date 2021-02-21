import { Button } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../css/header.css'

export default function AuthorProfile(props) {
    return(
        <div className="failure-story-profile">
            <Row>
                <Col md={3}>
                    <img src={require(`../img/myfailure/${props.img}`)} alt={props.author}/>
                </Col>
                <Col md={9}>
                    <div className="bio">
                        <h1>{props.author}</h1>
                        <p>{props.title}</p>
                        <Button href={props.info}> information </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}