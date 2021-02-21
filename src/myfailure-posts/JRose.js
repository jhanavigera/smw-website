import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class JRose extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="JRose.png"
                    author="Prof. Jonathan Rose" 
                    title="Computer Engineering Professor - Electronics"
                    info="https://www.ece.utoronto.ca/people/rose-j-s/"
                /> 
                <div className="post">
                    <p>
                    I was working in my first job for an hourly wage – a Canadian Tire store – as a general part-time store assistant.  The job was to help move inventory wherever it needed to go, general cleaning, and, specifically, assembling bicycles.    There were two problems: 1) I had no real mechanical aptitude nor experience putting together things like bicycles, and 2) I didn’t have any sense that one was supposed to put constant effort forward when being paid.   After about three weeks of 1 or 2 short shifts, the bicycle part of the job came to a head when one needed to be assembled for a waiting customer.  I simply wasn’t able to deliver it, period, let alone in sufficient time.   That, combined with my lazy attitude was all it took, rightly in retrospect, to be fired.  At the time, I certainly didn’t have that ‘rightly’ perspective; it was a devastating personal setback that made me seriously question my sense of self-worth.    Two years later, when working for a semi-unionized steel company, I also made the opposite mistake:  trying too hard in an environment where too much effort makes the other workers annoyed!    While I was trying to learn and improve from the first firing, which I think of as a good thing, I took it too far.  Learning #2!
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}