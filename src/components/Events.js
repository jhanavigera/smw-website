import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            {
                "name": "Digital Wellness Seminar with SCOre",
                "date": "09/21/2020",
                "time": "7:00 PM EST",
                "link": "TBD"
            },

            {
                "name": "SMW Sunday Yoga",
                "date": "09/27/2020",
                "time": "Time TBD",
                "link": "TBD"
            },
            {
                "name": "Movie Night",
                "date": "09/26/2020",
                "time": "Time TBD",
                "link": "TBD"
            }
        ]
    };
    render() {
        return (
            <div>
                <h1>Upcoming Events</h1>
                {this.state.events.map(event => (
                    <div class="events">
                        <h6><b>{event.name}</b></h6>
                        <p>{event.date + " " + event.time}</p>
                        <p>Zoom Link: {event.link}</p>
                    </div>

                ))}
            </div>
        );
    }
}


export default Events