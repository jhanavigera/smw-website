import React from 'react';

export default function BlogPostTitle(props){

    return(
        <div className="blog-title">
            <h2>{props.title}</h2>
            <h6>Written by: {props.author} </h6>
            <h6 className="date">{props.date}</h6>
            <h6 className="category"> {props.category} </h6>
        </div>
    )
}