import React from 'react'
import '../css/Footer.css'
import facebook from '../img/socialMedia/facebook.png'
import instagram from '../img/socialMedia/instagram.png'
import email from '../img/socialMedia/email.png'
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",

}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                {children}
                <div className="footer-title"><b>Connect With Us!</b></div>

                <br />
                <div class="social-media-link">
                    <a href="https://www.instagram.com/skulementalwellness/" target="_blank">
                        <img src={instagram} width="30px" />
                        Instagram - @skulementalwellness
                    </a>

                </div>
                <div class="social-media-link">
                    <a href="https://www.facebook.com/SkuleMW" target="_blank">
                        <img src={facebook} width="25px" />
                        Facebook - @SkuleMW
                    </a>

                </div>
                <div class="social-media-link">
                    <a href="malito:mentalwellness@skule.ca" target="_blank">
                        <img src={email} width="25px" />
                        mentalwellness@skule.ca
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer