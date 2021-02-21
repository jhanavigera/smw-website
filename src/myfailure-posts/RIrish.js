import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class RIrish extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="RIrish.png"
                    author="Prof. Rober Irish" 
                    title="Associate Professor, Engineering Communications Program"
                    info="https://ilead.engineering.utoronto.ca/people/robert-irish/"
                /> 
                <div className="post">
                    <h3> A Research Year Lost </h3>
                    <p>
                    During the 2017-2018 academic year, I had a “sabbatical”—a research leave that faculty get
                    once every seven years — during which I had an opportunity to travel, give some lectures at a university in Sweden, and focus in on some research on Engineering Ethics. All of this seemed like a great way to spend a year. And the first half was an excellent experience.
                    </p>
                    <p>
                    However, I have had an ongoing challenge of a constant headache for the past 3 1/2 years.
                    Most of the time, I cope by dosing on Advil and simply toughing it out. Occasionally, the
                    headache levels me. It impacts my ability to read and to concentrate—both necessary for a
                    communication professor. It can be particularly challenging for long-term tasks like planning,
                    trying to write a textbook or sometimes even an article, and reading difficult things (like ethics
                    books).
                    </p>
                    <p>
                    I had hoped that during the sabbatical I would be able to get a complete medical solution for
                    the problem. Instead, I spent far too many hours being shunted from one specialist to another, with ultimately no resolution. To make matters worse, the headache rose to its worst level ever in the period between February and May of 2018.
                    </p>
                    <p>
                    Not only was I unable to make much progress on my research, but I was often unable to do
                    much of anything at all. My brain was in a fog. For an academic, this is a pretty miserable
                    situation. To make matters worse, I was hit with debilitating depression. I think it was a result of my inability to do anything, and one compounded the other. My research ground to a halt. I failed to produce anything substantial.
                    </p>
                    <p>
                    I’d like to say that I did the smart thing and got in to see a therapist, or the strong thing and
                    pulled myself out of it by sheer act of will, but the truth is messier. I abandoned the research
                    project, I got some support forcing me into consistent daily routines, I got two puppies (while
                    they are not technically ‘therapy dogs’, they are therapeutic), and I set and met (mostly) some manageable short-term goals. The bonus was that I made these goals about my teaching, so they helped me get ready for the new semester in the fall of 2018.
                    </p>
                    <p>
                    So far, I find it is often the little things—routine, a pet, simple goal-setting, getting outside in
                    nature—that are helping me get through. On the upside, my headache has been pretty easily managed for the past six months (though no one has figured out why it is still there). This summer, I’ve even started to look at the research project but with no commitments to make anything of it.
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}