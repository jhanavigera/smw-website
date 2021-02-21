import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class NEnrightJerger extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="NEnrightJerger.png"
                    author="Prof. Natalie Enright Jerger" 
                    title="Computer Engineering Professor"
                    info="https://www.eecg.utoronto.ca/~enright/"
                /> 
                <div className="post">
                    <p>
                    In my first year of undergrad, I took an intro to programming course.  I arrived on campus with zero experience in programming and immediately felt out of my depth, surrounded by a predominantly male class who seemed to have been programming their entire lives.  In one of the labs where we were learning control flow, my code would not execute properly.  I felt I understood for loops, had followed the directions but still wasn’t getting the right output.  I asked the TA to come over and help.  He looked at my code for about 10 seconds and started to laugh.  Then, he called over another TA who also started to laugh.  My mistake was so obvious to them and rather than help me, they felt that humiliating me in front of my classmates was the right approach.  I was devastated.  Eventually, the person sitting next to me kindly pointed out that the problem might be the semi colon at the end of my for statement (which causes the loop body to not iterate as expected).  It was a simple typo and not some grave error on my part.  Yet, it felt like a huge failure and validation that I did not belong in that class.  In time, I came to appreciate that it was a small mistake and not any indication of aptitude on my part. I remember this and so many failures in undergrad feeling like the end of the world—something I would never recover from.  In those times, take a break, go for a walk, get a coffee with a friend and gain some perspective that a failed lab, a failed midterm, a failed project will not be the thing that defines you and you will go on to great success!
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}