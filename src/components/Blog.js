import React, { Component } from 'react';
import Header from './Header';
import '../css/blog.css';
import postData from '../blog-posts/data.json';
import { Row, Col } from 'react-bootstrap';

class Blog extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        const event = {target: { name: 'all'}}
        this.renderPosts(event);
    }

    renderPosts(event) {
        const cat = event.target.name;
        let postHTML = [];
        Object.keys(postData).sort().forEach(p => {
            if(p === cat || cat === "all") {
                const catHTML = Object.keys(postData[p]).sort().map(c => {
                    return (
                        <a key={p + "-" + c} href={`/blog/${p}-${c}`} className={`blog-post ${p}`}>
                            <span className={`top ${p}-bg`}></span>
                            <span className={`right ${p}-bg`}></span>
                            <span className={`bot ${p}-bg`}></span>
                            <span className={`left ${p}-bg`}></span>

                            <Row>
                                <Col md={4}>
                                    <img src={require(`../img/blog-posts/${p}/category-photo.png`)} alt={cat}/>
                                </Col>
                                <Col md={8}>
                                    <h3>{postData[p][c]["title"]}</h3>
                                    <p>{postData[p][c]["author"]}</p>
                                    <p><i>{p.split('-').join(' ')}</i></p>
                                    <p><u>{postData[p][c]["date"]}</u></p>
                                </Col>
                            </Row>
                        </a>
                    )
                })
                postHTML.push(catHTML);
            }
        });
        this.setState({posts: postHTML})
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                <Header
                    images={["blog1.png", "blog2.png", "blog3.png"]}
                    pagename="Blog"/>
                <div className="blog-post-hub">
                    <div className="blog-categories">
                        <input type="button" className="blog-cat all" name="all" value="all posts" onClick={this.renderPosts}/>
                        <input type="button" className="blog-cat mh" name="mental-health" value="mental health" onClick={this.renderPosts}/>
                        <input type="button" className="blog-cat wlb" name="work-life-balance" value="work life balance" onClick={this.renderPosts}/>
                        <input type="button" className="blog-cat sc" name="self-care" value="self care" onClick={this.renderPosts}/>
                        <input type="button" className="blog-cat o" name="organization" value="organization" onClick={this.renderPosts}/>
                        <input type="button" className="blog-cat aca" name="academia" value="academia" onClick={this.renderPosts}/>
                    </div>
                    <div className="blog-post-list">
                        {this.state.posts}
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Blog