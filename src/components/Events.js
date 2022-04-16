import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            /* pasted here for format:
            {
                "name": "Design your Mindset",
                "date": "Mondays",
                "time": "@ 6:10pm EDT",
                "link": "Log into CLNx"
            }*/

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
                        <p> Zoom Link: {event.link}</p>
                    </div>

                ))}
            </div>
        );
    }
}


export default Events