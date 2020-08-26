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

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Title} />
          <Route path="/About" component={About} />
          <Route path="/Blog" component={Blog} />
          <Route path="/AcademicResources" component={AcademicResources} />
          <Route path="/MentalResources" component={MentalResources} />
          <Route path="/OnlineActivities" component={OnlineActivities} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }

}


export default App;
