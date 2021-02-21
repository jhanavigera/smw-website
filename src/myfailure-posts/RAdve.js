import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class RAdve extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="RAdve.png"
                    author="Prof. Ravi Adve" 
                    title="Electrical and Computer Engineering Professor - Communications"
                    info="https://www.ece.utoronto.ca/people/adve-r/"
                /> 
                <div className="post">
                    <p>
                        My failure story is just that – a failure. I failed my first year Engineering Drawing class. 
                        I had never been good at drawing, but actually failing the class was a shock to the system. 
                        In my undergrad university, drawing was a separate, required, class – and no one had ever 
                        failed that class before. I hadn't been doing well during the term, but had developed a bad 
                        and overconfident attitude about the class. My year, the course coordinator decided to 
                        experiment with failing students in the drawing class - and, sure enough, I failed. 
                        My first term and I was a failure! Whoa! I had to take the class again during the next offering, 
                        take my Quantum Mechanics class in summer, essentially a lot of disruption. One lesson I drew
                        from this is to never take anything for granted...
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}