import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            {
                "name": "SMW Sunday Yoga",
                "date": "02/06/2021",
                "time": "7:00 PM EST",
                "link": "DM Us on Instagram for Zoom Info!"
            },

            {
                "name": "SMW Sunday Yoga",
                "date": "02/20/2021",
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