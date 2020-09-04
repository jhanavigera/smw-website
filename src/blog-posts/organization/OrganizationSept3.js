import React, { Component } from 'react';
import BlogPostTitle from '../blogTitle';

export default class OrganizationSept3 extends Component {
    render() {
        return(
            <div>
                <BlogPostTitle title={this.props.title} author={this.props.author} date={this.props.date} category={this.props.category}/>
                <p>
                    I generally think of myself as an organized person, but a first glance at my desk would make you think otherwise. In fact, I bet anyone else trying to use my desk would have a hell of a time, but to me, it’s perfect. I know what’s in every pile of paper, and I know where to find anything I need to find. 
                </p>
                <p>
                    The sprawl of my desk slowly developed this spring as suddenly all my work was done in this one spot. At first, I tried to keep it super clean and tidy, but that was actually counterproductive to my ability to work. My desk is cozy to me, and it is a space I feel safe working. Don’t worry if your way of organization is not insta-worthy, everyone organizes differently and everyone works best in different environments.
                </p>
                <blockquote>
                    A lot of the ways I organize have changed since quarantine, but I’m slowly rebuilding systems that work for me. Don’t be worried if the way you work isn’t like everyone else, or even like how you worked before quarantine. When you find something that works for you, use it!
                </blockquote>
                <p>
                    As well as my desk, my scheduling system changed when we moved online. I used to have everything in my phone calendar, but lately I’ve switched to pencil and paper calendars. I feel like pencil and paper is more flexible, and again I can tune the design to exactly what I want it to be.                
                </p>
                <p>
                    In quarantine, more of my time has become free time, so instead of a rigorous schedule of what to do when, I’ve switched to having a ToDo list and picking what I want to do from it in my free time. My calendar seems emptier, but it’s just more flexible, because I know I’ll have good days and bad days and this way I beat myself up less on the bad days. So what if I didn’t get much done? I didn’t have to.                
                </p>
                <p>
                    A lot of the ways I organize have changed since quarantine, but I’m slowly rebuilding systems that work for me. Don’t be worried if the way you work isn’t like everyone else, or even like how you worked before quarantine. When you find something that works for you, use it! If you haven’t yet, be open to trying out new ways of organizing. We can all muddle through together.
                </p>
            </div>
        )
    }
}