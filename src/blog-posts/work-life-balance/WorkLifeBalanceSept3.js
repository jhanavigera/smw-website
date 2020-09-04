import React, { Component } from 'react';
import BlogPostTitle from '../blogTitle';

export default class WorkLifeBalanceSept3 extends Component {
    render() {
        return(
            <div>
                <BlogPostTitle title={this.props.title} author={this.props.author} date={this.props.date} category={this.props.category}/>

                <p>
                    As students and young professionals, we hear the words “work-life balance” A LOT. It often feels very artificial when people say it, as if it were quite easy to make distinctions between work and social life and stick to it. But for many of us, even without online learning, this can be a struggle: our friends are people in our programs, our social events are run through the university, our lives at this moment are tied to our work. 
                </p>
                <p>
                    This spring, however, the lines between work and life became even more uncertain. For me especially, the physical distinction between the two spaces were important for keeping boundaries. You go to campus and engage in school work, then come home and engage in the rest of your life. But with everything moving online and many of us schooling from our homes, that distinction has been demolished. This makes it even more important for us to actively keep those types of boundaries strong in our minds so online school doesn’t become overwhelming.
                </p>
                <blockquote>
                    I try to keep my workspace separate from the rest of my living space and give myself boundaries when it comes to how long I’ll work during the day.
                </blockquote>
                <p>
                    Techniques that have worked for me is making sure I don’t let my schoolwork drag on throughout the day or the week; I try to attend my classes at the suggested times or, pick a day & time in the week which I dedicate to studying or catching up on schoolwork. I try to keep my workspace separate from the rest of my living space and give myself boundaries when it comes to how long I’ll work during the day. For me, making some sort of flexible schedule is the most useful, because then I can see how I’m feeling on particular days and adjust my workload and social time for that. Not everyone’s vision of a work-life balance is the same; for some, sticking to a stricter balance similar to the structure of regular school works well, while for others, taking it a day at a time and listening to their body when working is more helpful.
                </p>
                <p>
                    It is important to remember that even though you might be home throughout the day doesn’t mean you HAVE to dedicate more time to school. You do not have to spend every second of quarantine being ‘productive’. You’re still human, and taking the time to sleep and eat properly, shower, and socialize with your friends and family is essential for your mental health, particularly in the upcoming online semester.
                </p>
            </div>
        )
    }
}