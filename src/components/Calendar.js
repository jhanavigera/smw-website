import React from 'react'
import { GOOGLE_API_KEY, CALENDAR_ID } from "../config.js";
import moment from "moment";
import '../css/calendar.css'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    componentDidMount = () => {
        this.getEvents()
    }

    getEvents() {
        let that = this;
        function start() {
            window.gapi.client.init({
                apiKey: GOOGLE_API_KEY
            }).then(function () {
                return window.gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/ events`,
                })
            }).then((response) => {
                let events = response.result.items
                that.setState({
                    events
                }, () => {
                    console.log(that.state.events);
                })
            }, function (reason) {
                console.log(reason);
            });
        }
        window.gapi.load('client', start);
    }

    render() {
        const { time, events } = this.state;

        let eventsList = events.map(function (event) {
            return (
                <a
                    className="list-group-item"
                    href={event.htmlLink}
                    target="_blank"
                    key={event.id}
                >
                    {event.summary}{" "}
                    <span className="badge">
                        {moment(event.start.dateTime).format("h:mm a")},{" "}
                        {moment(event.end.dateTime).diff(
                            moment(event.start.dateTime),
                            "minutes"
                        )}{" "}
            minutes, {moment(event.start.dateTime).format("MMMM Do")}{" "}
                    </span>
                </a>
            );
        });

        let emptyState = (
            <div className="empty">
                <h3>
                    No meetings are scheduled for the day. Create one by clicking the
                    button below.
        </h3>
            </div>
        );

        let loadingState = (
            <div className="loading">
            </div>
        );

        return (
            <div className="container">
                <div
                    className={
                        this.state.isBusy ? "current-status busy" : "current-status open"
                    }
                >
                </div>
                <div className="upcoming-meetings">
                    <h1>Upcoming Events</h1>
                    <div className="list-group">
                        {this.state.isLoading && loadingState}
                        {events.length > 0 && eventsList}
                        {this.state.isEmpty && emptyState}
                    </div>
                </div>
            </div>
        );
    }

}