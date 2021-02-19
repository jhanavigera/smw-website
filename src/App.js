import React, { Component } from 'react';
import './App.css';
import routes from './Routes';
import { Navigation } from './components/Navigation';
import About from './components/About';
import Title from './components/Title';
import Footer from './components/Footer';
import Blog from './components/Blog';
import AcademicResources from './components/AcademicResources';
import MentalResources from './components/MentalResources';
import OnlineActivities from './components/OnlineActivities'
import MyFailure from './components/MyFailureStory'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './util/History';
import BlogPost from './blog-posts/BlogPost';


class App extends Component {
  render() {
    return (

      <BrowserRouter history={history}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Title} />
          <Route path="/About" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:article" exact component={BlogPost}/>
          <Route path="/AcademicResources" exact component={AcademicResources} />
          <Route path="/MentalResources" exact component={MentalResources} />
          <Route path="/OnlineActivities" exact component={OnlineActivities} />
          <Route path="/MyFailureStory" exact component={MyFailure}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }

}


export default App;
