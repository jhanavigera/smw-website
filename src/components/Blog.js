import React, { Component } from 'react';
import Header from './Header';


class Blog extends Component {
    render() {
        return (
            <Header
                images={["blog1.png", "blog2.png", "blog3.png"]}
                pagename="Blog"/>
        );
    }

}

export default Blog