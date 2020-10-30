import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            {
                "name": "Movie Night - Train to Busan",
                "date": "10/31/2020",
                "time": "8:00 PM EST",
                "link": "DM Us on Instagram for Zoom Info!"
            },

            {
                "name": "SMW Sunday Yoga",
                "date": "11/08/2020",
                "time": "7:00 PM EST",
                "link": "DM Us on Instagram for Zoom Info!"
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