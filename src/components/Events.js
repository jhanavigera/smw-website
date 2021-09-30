import React, { Component } from 'react';
import '../css/Events.css'

class Events extends Component {
    state = {
        events: [
            {
                "name": "",
                "date": "",
                "time": "",
                "link": ""
            },

            {
                "name": "",
                "date": "",
                "time": "",
                "link": ""
            }

        ]
    };
    render() {
        return (
            <div>
                <h1>Upcoming Events</h1>
                <div class="events">
                    <br></br>
                    <h6> Stay tuned for future events!</h6>     
                </div>                 
                {this.state.events.map(event => (
                    <div class="events">
                         
                        <h6><b>{event.name}</b></h6>
                        <p>{event.date + " " + event.time}</p>
                        <p> {event.link}</p>
                    </div>

                ))}
            </div>
        );
    }
}


export default Events