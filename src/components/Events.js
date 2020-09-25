import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            {
                "name": "Movie Night (Animated/Disney Theme)",
                "date": "09/26/2020",
                "time": "10:00 AM EST & 8:00 PM EST",
                "link": "TBD"
            },

            {
                "name": "SMW Sunday Yoga with Angy",
                "date": "10/04/2020",
                "time": "7:00 PM EST",
                "link": "TBD"
            },
            {
                "name": "SMW Sunday Yoga with Vanessa",
                "date": "10/18/2020",
                "time": "7:00 PM EST",
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