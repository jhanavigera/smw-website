import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class EMoore extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="EMoore.png"
                    author="Prof. Emily Moore" 
                    title="Director of Troost Institute for Leadership Education in Engineering"
                    info="https://ilead.engineering.utoronto.ca/people/emily-moore-director/"
                /> 
                <div className="post">
                    <p>
                        My failure story goes back to my first term at Queen’s.  In calculus, I got a 32% on the midterm. It was the first time I had failed an exam in my life, and I was devastated. I worked hard and managed to pass the course with the lowest mark on my transcript. What made it all bearable was that so many of my year were in the same boat. There was one killer question on the final about Spot the Dog doing something that we needed to solve with integration. I don’t think more than 10 people in the class got that question – I certainly didn’t - and my friend Joey made a cartoon of Spot that became our mascot. Sharing that failure and celebrating our perseverance really bonded our class. I learned that failure is part of being human, that it is simply a setback that you can recover from and that it is fodder for a great story!                    </p>
                    <p>
                        My profile picture is from my 25th reunion with Spot on our banner.
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}