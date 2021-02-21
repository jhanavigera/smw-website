import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class BMcCabe extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="BMcCabe.png"
                    author="Prof. Brenda McCabe" 
                    title="Civil and Mineral Engineering Professor"
                    info="https://civmin.utoronto.ca/home/about-us/directory/professors/brenda-mccabe/"
                /> 
                <div className="post">
                    <p>
                        Failures take many forms and have many outcomes. One of my ongoing failures is that I’ve always had a very difficult time remembering names. Even when I was seven, I recall meeting someone new and having to ask them many times what their name was. Forty years later when I became Department Chair, I decided that I was going to fix this weakness once and for all. I bought a book that was recommended by the Rotman School of Management called The Memory Bible, and settled down to read it. The author suggested a method of repeating names several times when you first meet someone. I was about 1/3 of the way through the book when the inevitable happened. I lost the book. I couldn’t remember where I left it! BUT, I remembered its name. 
                    </p>
                    <p>
                        I still can’t remember the names of everyone I meet, especially when it is a group of people and I don’t have an opportunity to get to know them as individuals. I’ve developed methods to write down names and notes as soon as I can after the introduction, but it is still a struggle and embarrassing. Who are you again?
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}