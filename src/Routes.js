import React from 'react';
import { Route } from 'react-router';

import Title from './components/Title';
import AcademicResources from './components/AcademicResources';
import MentalResources from './components/MentalResources';
import Blog from './components/Blog';
import App from './App';

export default (
    <Route path="/" component={App}>
        <Route path="/AcademicResources" component={AcademicResources} />
        <Route path="/MentalResources" component={MentalResources} />
        <Route path="/Blog" component={Blog} />
    </Route>
)