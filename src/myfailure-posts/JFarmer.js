import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class JFarmer extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="JFarmer.png"
                    author="Prof. Jennifer Farmer" 
                    title="Assistant Professor in Chemical Engineering"
                    info="https://chem-eng.utoronto.ca/people/farmer-jenn/"
                /> 
                <div className="post">
                    <p>
                        During my first year of undergrad at York University, I had a part-time job at a pharmacy. Through my job, I contracted “mono”, an illness which left me fatigued. Despite seeing a doctor, my illness wasn’t properly diagnosed until 8 months later (i.e., almost the end of second term first year) and it started impacting my academics and social life. I ended up giving up my job and I felt unmotivated to go to classes. This led me to go on academic probation. I had to drop some courses and took them in the summer instead. After seeing a specialist who diagnosed me with mono I started my road to recovery. At the start of second year I tried going on full workload but I wasn’t doing as well as I wanted to. So, I talked with my academic advisor who advised that I should decrease my workload from 100% to 70%. This was hard to hear because as a super achiever, I had worked hard to get back after my illness but it still wasn’t enough. This was also hard for my family to hear. They thought a reduced workload meant I wasn't doing well and worried that it would negatively impact my chances of finding employment upon graduation. Even though I was set back at first, this decision has positively impacted my undergrad experience. I was able to get a part-time job again, and participate in extra-curricular such as dragon boating. Through these activities, I became a happier person and at the end of 5 years of undergraduate education, I graduated as one of the top in my class. This brought a perspective about university and made me realize that it’s not a race; we all need to do what is best for us personally.
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}