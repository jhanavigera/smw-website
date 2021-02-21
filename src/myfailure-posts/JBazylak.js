import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';

export default class JBazylak extends Component {
    render(){
        return (
            <div>
                <AuthorProfile 
                    img="JBazylak.png"
                    author="Prof. Jason Bazylak" 
                    title="Associate Professor in Mechanical Engineering"
                    info="https://www.mie.utoronto.ca/faculty_staff/jbazylak/"
                /> 
                <div className="post">
                    <p>
                    I did really well in high school. So well in fact that I wasn’t challenged and therefore had very little experience with failure. As a result I develop zero study and coping skills. This worked OK for high school, but then came Engineering. 
                    </p>
                    <p>
                    I was confident going into Engineering. Why wouldn’t I be? I was a “great student” in high school and Engineering couldn’t be that different from high school could it? 
                    </p>
                    <p>
                    ….It was. First year hit me like a ton of bricks. I should have seen the signs. When I went through engineering, high school calculus was not required in engineering (yes it was invented, no old guy jokes!), but I had taken it. Therefore I expected I would breeze through my first year calculus course. However by the third class we had covered all the materials that I had taken in my grade 12 calculus class. Despite this I was still delusional. Afterall denial isn’t just a river in Egypt. 
                    </p>
                    <p>
                    I continued to think I was doing well until I got my first midterm back. I forget what class it was, but I distinctly remember the room. This was back when exams were just thrown in a pile at the front of the room and you sorted through to find your exam. After finding mine all that was written on the front was “45.” 
                    </p>
                    <p>
                    I was a bit confused, but since I was a “good student” I figured I just needed some clarification. I quickly caught up my professor as he was heading out the door and ask, “Prof! So is this out of 50?” My professor, much to his credit, simply said “No.” Apparently he had years of experience teaching first year students like myself. 
                    </p>
                    <p>
                    Now I don’t think you fully understand the level of my denial at this point. To understand better picture my very real reaction to that 45. I said, with a straight face, directly to my professor, “Then there must be some mistake. _I_ don’t fail exams.”
                    </p>
                    <p>
                    I keep this story in mind when I deal with students. Not only can first year be difficult for most, but it can totally blindside some of us. Luckily because I had an amazing group of friends in engineering who coached me through that first term I was able to survive and develop the study and coping skills needed to succeed in engineering.
                    </p>
                    <Button href="/MyFailureStory"> Back to all Stories </Button>
                </div>              
            </div>
        )
    }
    
}