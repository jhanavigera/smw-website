import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogPostTitle from '../blogTitle';

export default class SelfCareSept3 extends Component {
    render() {
        return(
            <div>
                <BlogPostTitle title={this.props.title} author={this.props.author} date={this.props.date} category={this.props.category}/>

                <p>
                    Self-care sounds like such a straightforward concept, doesn’t it? By definition, we take care of ourselves physically, mentally, emotionally and even spiritually to ensure that we remain in good health. The truth, though, is that sometimes taking care of ourselves is more challenging than we like to admit. I found this to be especially true for myself when classes went online this Winter semester. My home became my permanent workspace, and taking time for myself became difficult in the face of online learning. However, I learned a lot about self-care and how it applies to me through these challenges.                
                </p>

                <blockquote>
                    The most important thing about self-care that is not often said, is that it can be different for everyone                
                </blockquote>

                <div className="blog-image">
                    <Row>
                        <Col>
                            <img src={require('../../img/blog-posts/self-care/sept3/image1.png')} alt="Sarah with mug"/>
                        </Col>
                    </Row>
                    <p>
                        Although unfortunately accurate, this image depicts how I looked for roughly 90% of my online lectures - a little zonky, with a cup of coffee, and a couple of struggling braincells
                    </p>
                </div>

                <p>
                    The most important thing about self-care that is not often said, is that it can be different for everyone, and I have learnt this from my friends in engineering. One thing we can all agree on is that it’s nice to dedicate time to not doing work, and taking regular breaks is the best way to avoid burnout. For instance, one friend of mine loves to read, and she loved having that time to herself to relax. Another friend told me that watching a bit of anime each night helped her to unwind. During online classes, my favourite way to take a break from work was doing sudoku puzzles (yes there are still numbers, but not integrating them is nice), but a break can be anything from taking a walk, to taking a nap, to having a snack, to simply doing nothing at all. Sometimes a break is just a way for us to turn off our minds and relax - social media breaks can be an especially great way to do this, whether you log out for an hour or for a few days or put down your phone entirely.                
                </p>
                
                <div className="blog-image">
                    <Row>
                        <Col>
                            <img src={require('../../img/blog-posts/self-care/sept3/image3.jpg')} alt="Sudoku"/>
                        </Col>
                    </Row>
                    <p>
                        I started this sudoku book in chronological order, hence why I’m still on the easy puzzles… but also the easy puzzles are more relaxing for me
                    </p>
                </div>
                
                <p>
                    Hobbies are also a great way to take care of yourself when needed. I mean, by definition it’s an activity done for fun, so any hobby is a great way to rejuvenate yourself when needed. My favourite hobby is baking, but I found it difficult to make time for this during the semester. So I decided to find hobbies that take up less time, but still fit well into my schedule. I did fun little things throughout the semester to take care of myself - I treated myself to face masks, had solo dance parties in my room (I am by no means a good dancer, but it was fun and got me moving!), and continued taking care of my 2 lovely plants - a moon cactus and a sunflower. Whether we pursue our hobbies through UofT clubs or on our own, we should cherish each one and enjoy them as much as we can! From sports to arts to gaming to cooking to gardening, taking the time to do the things you love is an important aspect of getting through the semester and life in general.
                </p>

                <blockquote>
                    Sometimes it can be so difficult to take a break from everything. The worst feeling is the guilt that can come from not doing work, and I struggled with this the most.
                </blockquote>
                
                <div className="blog-image">
                    <Row>
                        <Col md={6}>
                            <img src={require('../../img/blog-posts/self-care/sept3/image2.jpg')} alt="Lush Cosmetics Mask"/>
                        </Col>
                        <Col md={6}>
                            <img src={require('../../img/blog-posts/self-care/sept3/image5.jpg')} alt="L'Oreal Pure-Clay Mask"/>
                        </Col>
                    </Row>
                    <p>
                        For me, face masks are an important part of my self-care routine!
                    </p>
                    <p>
                        Pictured left: LUSH Cosmetics Mask of Magnaminty
                    </p>
                    <p>
                        Pictured right: L’Oreal Pure-Clay Mask - Exfoliate and Refine Pores
                    </p>
                </div>

                <div className="blog-image">
                    <Row>
                        <Col md={3}/>
                        <Col md={6}>
                            <img src={require('../../img/blog-posts/self-care/sept3/image4.jpg')} alt="Cactus"/>
                        </Col>
                    </Row>
                    <p>
                        My two plants - Luna the moon cactus, and Sunny the sunflower 
                    </p>
                </div>

                <p>
                    Sometimes it can be so difficult to take a break from everything. The worst feeling is the guilt that can come from not doing work, and I struggled with this the most. I learned to cope with this by treating myself like an ‘academic athlete’ (not to be confused with varsity athletes!). When athletes prepare for big events, they can’t train 24/7. Having rest days and taking breaks from training are almost as productive as the training itself when it comes to sports. I’ve realised this concept can apply to our engineering school work too. Taking breaks from our work to relax and rest are just as important as the work we do, and in the end the learning payoff is way better when we care for our minds, bodies and spirits. Taking a break doesn’t make us weak, or lazy, or mean that we can’t handle engineering because that is (pardon my language here) total poppycock. Working towards academic goals, no matter how big or small, is awesome, but taking care of ourselves is the number one priority. To my fellow ‘academic athletes’, keep training, keep resting, and do take care of yourself in whatever way works best for you.
                </p>
            </div>
        )
    }
}