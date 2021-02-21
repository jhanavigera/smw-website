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


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './util/History';
import BlogPost from './blog-posts/BlogPost';
import MyFailureStory from './components/MyFailureStory';
import RAdve from './myfailure-posts/RAdve';
import BMcCabe from './myfailure-posts/BMcCabe';
import EMoore from './myfailure-posts/EMoore';
import JBazylak from './myfailure-posts/JBazylak';
import JFarmer from './myfailure-posts/JFarmer';
import JRose from './myfailure-posts/JRose';
import NEnrightJerger from './myfailure-posts/NEnrightJerger';
import PWeiss from './myfailure-posts/PWeiss';
import RIrish from './myfailure-posts/RIrish';


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
          <Route path="/MyFailureStory" exact component={MyFailureStory}/>
          {/* My failure stores */}
          <Route path="/myfailure-posts/RAdve" exact component={RAdve}/>
          <Route path="/myfailure-posts/BMcCabe" exact component={BMcCabe}/>
          <Route path="/myfailure-posts/EMoore" exact component={EMoore}/>
          <Route path="/myfailure-posts/JBazylak" exact component={JBazylak}/>
          <Route path="/myfailure-posts/JFarmer" exact component={JFarmer}/>
          <Route path="/myfailure-posts/JRose" exact component={JRose}/>
          <Route path="/myfailure-posts/NEnrightJerger" exact component={NEnrightJerger}/>
          <Route path="/myfailure-posts/PWeiss" exact component={PWeiss}/>
          <Route path="/myfailure-posts/RIrish" exact component={RIrish}/>

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }

}


export default App;
