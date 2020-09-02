import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/Title.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import handbook from '../img/Handbook_Cover.png'
import peerCrisisCover from '../img/PeerCrisisCover.png'
import handbookLink from '../Handbook 2020 - Updated.pdf'
import PeerCrisis from '../Peer in Crisis.pdf'


function Title() {
    return (

        <div style={{ width: '100%', margin: 'auto' }}>

            <div className="title-container homeGradient">
                <h2>Welcome to Skule Mental Wellness</h2>
                <div class="row">
                    <div className="about-container">
                        <h3>What is SMW?</h3>
                        <p>Skule Mental Wellness is comprised of a group engineering students that are strong advocates for mental health and wellness. We ensure that the Skule community has access to mental health resources they need. Additionally, we run events, workshops, and fun activities throughout the year to help relieve the stress that comes with being an engineering student.</p>
                        <div class="about-buttons">
                            <Link to="/About"><button className="btn btn-secondary">Meet the Team</button></Link>
                            <button className="btn btn-secondary">Get Involved</button>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="handbook-container">
                        <div class="handbook-cover">
                            <img src={handbook} />
                        </div>

                        <div class="handbook-text">
                            <h5>Presenting our Mental Wellness Handbook</h5>
                            <p>Read for ways to reduce stress and for some useful resources!</p>
                            <a href={handbookLink} target="_blank">
                                <button className="btn btn-secondary">Handbook PDF</button>
                            </a>
                        </div>


                    </div>

                    <div class="handbook-container">
                        <div class="handbook-cover">
                            <img src={peerCrisisCover} />
                        </div>
                        <div class="handbook-text">
                            <h5>Peer in Crisis Guide</h5>
                            <p>Learn how you can take care of your peers that may be struggling with mental health.</p>
                            <a href={PeerCrisis} target="_blank">
                                <button className="btn btn-secondary">Guide PDF</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>






            <div className="title-container resourceGradient">
                <h2>Resources for You</h2>

                <div class="button-container">


                    <a href="/AcademicResources">
                        <button className="resource-button blue">
                            <span>Academic Resources</span>
                        </button>
                    </a>

                    <a href="/MentalResources">
                        <button className="resource-button grey">
                            <span>Mental Health Resources</span>
                        </button>
                    </a>

                    <a href="/">
                        <button className="resource-button indigo">
                            <span>COVID-19 Resources</span>
                        </button>
                    </a>

                </div>
            </div>

        </div >

    )
}

export default Title