import React from 'react';
import '../css/header.css'

export default function Header(props) {
    let images = [];
    let imageNames = (props.images.length > 3) ? props.images.splice(0, 3) : props.images;

    images = imageNames.map(i => {
        return <img key={i} src={require(`../img/headers/${i}`)} alt={props.pagename}/>
    })

    return(
        <div className="header">
            <div className="title">
                <h1>{props.pagename}</h1>
                <p>{props.subtitle}</p>
            </div>
            {images}
        </div>
    )
}