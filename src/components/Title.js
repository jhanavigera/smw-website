import React from 'react'
import Button from 'react-bootstrap/Button'
import '/Users/angyhiggy/smw-website/src/css/Title.css'
import { Link } from 'react-router-dom'


function Title() {
    return (
        <div className="Title-image">
            <div className="Title-text">
                <br />
                <h1>Welcome to Skule Mental Wellness</h1>
                <p>We are here to help you succeed mentally and academically during the 2020-2021 school year through our events and connecting you to campus resources!</p>
            </div>
            <div className="buttons">
                <table>

                    <tr>
                        <td>
                            <Link to="/MentalResources">
                                <button class="mainButton light">MENTAL HEALTH RESOURCES</button>
                            </Link>
                        </td>

                        <td>
                            <button class="mainButton purple"></button>
                        </td>

                        <td>
                            <Link to="/AcademicResources">
                                <button class="mainButton light">ACADEMIC RESOURCES</button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button class="mainButton purple"></button>
                        </td>

                        <td>
                            <Link to="/Blog">
                                <button class="mainButton light">SMW BLOG</button>
                            </Link>


                        </td>

                        <td>
                            <Link to="/OnlineActivities">
                                <button class="mainButton purple">ONLINE ACTIVITIES</button>
                            </Link>
                        </td>
                    </tr>
                </table>


            </div>
            <hr />
            <div className="Title-text">
                <h1>Upcoming Events</h1>
                <p>F!rosh Yoga Night - September 8th</p>
            </div>



        </div >
    )
}

export default Title