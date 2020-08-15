import React from 'react'
import Button from 'react-bootstrap/Button'
import '/Users/angyhiggy/smw-website/src/css/Title.css'

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
                            <button class="mainButton yellow">MENTAL HEALTH RESOURCES</button>
                        </td>

                        <td>
                            <button class="mainButton pink">UPCOMING EVENTS</button>
                        </td>

                        <td>
                            <button class="mainButton green">ACADEMIC RESOURCES</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button class="mainButton red"></button>
                        </td>

                        <td>
                            <button class="mainButton blue">SMW BLOG</button>
                        </td>

                        <td>
                            <button class="mainButton orange">ONLINE ACTIVITIES</button>
                        </td>
                    </tr>
                </table>

            </div>
        </div >
    )
}
export default Title