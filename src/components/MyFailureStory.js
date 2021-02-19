import React, { Component } from 'react';
import Header from './Header';

export default class MyFailure extends Component {
    render(){
        return (
            <div>
                <Header 
                    images={["failure1.png", "failure2.png", "failure3.png"]}
                    pagename="My Failure Story" 
                    subtitle="Failures are finger posts on the road to achievement. - C.S. Lewis"/>

            </div>
        )
    }
}