import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/Title.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import handbook from '../img/Handbook_Cover.png'
import peerCrisisCover from '../img/PeerCrisisCover.png'
import handbookLink from '../Handbook 2021 - Updated.pdf'
import PeerCrisis from '../Peer in Crisis.pdf'
import Events from '../components/Events'


function Title() {
    return (
        <div>
            <div className="Title-image">
                <div className="hero-text">
                    <h1>Welcome to Skule Mental Wellness</h1><br />
                    <h6>We are a group of engineering students that are strong advocates for mental health and wellness. We ensure that the Skule community has access to mental health resources they need. Additionally, we run events, workshops, and fun activities throughout the year to help relieve the stress that comes with being an engineering student.</h6><br />
                    <div className="row justify-content-center">
                        <div className="buttons">
                            <a href="/MentalResources" className="button1 large">Mental Health Resources</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkCQa_6ylGDsFmD07Sv-VPYQcKhGWkzSsGriVTrJFDDXY92g/viewform" target="_blank" className="button1 large">Join Skule Mental Wellness</a>
                            <a href="/AcademicResources" className="button1 large">Academic Resources</a>
                            <br/>
                            <a href="/MyFailureStory" className="button1 large">My Failure Story</a>


                        </div>
                    </div>
                </div>



            </div>

            <div class="row">
                <div className="events-section">
                    {<Events />}
                </div>

                <div className="pdf-section">
                    <h1>PDF Resources</h1>
                    <div className="item">
                        <img src={handbook} />
                        <h5>SMW Handbook 2021-2022</h5>
                        <p>Read for ways to reduce stress and for some useful resources!</p>
                        <a href={handbookLink} class="button1 small">Handbook PDF</a>
                    </div>

                    <br></br>
                    
                    <div className="item">
                        <img src={peerCrisisCover} />
                        <h5>Peer in Crisis Guide</h5>
                        <p>Learn how you can take care of your peers that may be struggling with mental health.</p>
                        <a href={PeerCrisis} class="button1 small">Guide PDF</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Title