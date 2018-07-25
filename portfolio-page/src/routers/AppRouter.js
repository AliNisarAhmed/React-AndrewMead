import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


// <NavLink> is usually better for making NavBars where highlighting is done to show the user on which page he is

// Whereas <Link> is better for generic link pages

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/portfolio/:id" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;