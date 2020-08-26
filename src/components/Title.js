import React from 'react'
import Button from 'react-bootstrap/Button'
import '/Users/angyhiggy/smw-website/src/css/Title.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import handbook from '/Users/angyhiggy/smw-website/src/img/Handbook_Cover.png'


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

                    <div className="events-container">
                        <h3>Upcoming Events</h3>
                    </div>
                </div>


                <div class="handbook-container">

                    <img src={handbook} />
                </div>
                <div class="handbook-text">
                    <h5>Check out our mental wellness handbook</h5>
                    <p>Read for ways to reduce stress and for some useful resources!</p>
                    <button className="btn btn-secondary">Handbook PDF</button>
                </div>
            </div>






            <div className="title-container resourceGradient">
                <h2>Resources for You</h2>

                <div class="button-container">


                    <a href="/AcademicResources">
                        <button className="btn btn-secondary resource-button">
                            Academic Resources
                        </button>
                    </a>

                    <a href="/MentalResources">
                        <button className="btn btn-secondary resource-button">
                            Mental Health Resources
                        </button>
                    </a>

                    <a href="/">
                        <button className="btn btn-secondary resource-button">
                            COVID-19 Resources
                        </button>
                    </a>

                </div>
            </div>

        </div >

    )
}

export default Title