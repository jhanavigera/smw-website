import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class PWeiss extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="PWeiss.png"
                    author="Prof. Peter Elliot Weiss" 
                    title="Associate Professor, Teaching Stream"
                    info="http://petereliotweiss.ca/bio.html"
                /> 
                <div className="post">
                    <p>
                    You do not have to be a bad student to fail. I was never a bad student, certainly not in the sense of a student who was disruptive or had bad behavior. When I went to class, I was always well-behaved and attentive and so I always did well…when I went to class. However, I didn’t always go to class. In some courses, I missed lectures for whole terms, neglected assignments and exams, failed. Failed miserably.
                    </p>
                    <p>
                    I went to university knowing what I wanted to do with my life. I wanted to become a playwright. I had read a lot more plays than most other people my age and had already written some myself. Now, I wanted to learn as much as I could about the theatre – about acting, directing, stage-management, design. I took part, in various ways, in over a dozen productions, from main-stage student shows, to studio shows, to summer stock. None of this was part of any class. None of it contributed in any way to my GPA. There wasn’t even a co-curricular record. Plus, it all took time and energy. Time and energy that could have gone into studying, which I did not do unless I was completely interested in the class. Nor did I do the intelligent thing and officially drop classes that I had stopped going to.
                    </p>
                    <p>
                    As a result, toward the end of second year, I found that I was failing three of my five courses (all courses were two-term). The university policy was that in a case like this, you were thrown out. You had to pass three courses to at least be on probation. I looked at the possibilities – I had not been to any of the courses since mid-fall. English was out of the question. There was no way I could catch up on all the reading plus any of the lecture material about the reading. I don’t even remember what one of the other courses was, but I do remember Psych 101. The prof had said, in the first lecture, if you ever had a problem, you could go see him. I had a problem. I went to see him.
                    </p>
                    <p>
                    Much to my surprise he was not sympathetic. He looked at my grades. I had failed the first midterm. I had not been to the Christmas exam or the second midterm. I had barely any marks to speak of. “What should I do” I asked “to prepare for the final?” 
                    </p>
                    <p>
                    “Read the textbook,” he said, dryly.
                    </p>
                    <p>
                    “That’s it?” I asked.
                    </p>
                    <p>
                    “That’s it,” he said. That was not what I expected from someone who had invited students with problems to see him. I thought, oh well, he doesn’t like my kind of problem. But, being pragmatic, I decided to do whatever it took to pass this course. I had never studied in my life. I had always gotten top grades by just listening in class, thinking about what I heard and trying to make sense of it in my head. That is why being in class was so important. Now that I hadn’t been, I had to learn to study.
                    </p>
                    <p>
                    I went to a study hall – Brock Hall. It was an old building, painted white and filled with dozens of study carrels. It was like a sensory deprivation chamber. Every day I went in at 9 and read the text book, making notes on note cards. I would take a break once an hour – these were great treats! Either the candy machine or the washroom, never both in the same break. Well, I got a B in the course, which meant that I actually was probably close to 100% on the final exam. And so I went into third year on probation. At the end of third year, I won a scholarship.
                    </p>
                    <p>
                    I learned a lot about myself facing expulsion, studying, going on probation. I learned that university really was important to me and that I couldn’t always do things my own way. Sometimes, I had to adhere to the rules. I learned that I could adhere to the rules, I could be disciplined, I could study in a way I never had, and most of all, I learned I could overcome adversity. I could be strong and smart and resourceful when I had to be. How I was strong, how I could act in an intelligent manner and what resources I could draw upon were things I never would have known about myself if I had not faced the situation that I faced.
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}