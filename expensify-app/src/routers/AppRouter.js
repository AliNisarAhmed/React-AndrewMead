import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


// <NavLink> is usually better for making NavBars where highlighting is done to show the user on which page he is

// Whereas <Link> is better for generic link pages

/* BrowserRouter can only take on component or element as child, hence <div></div>*/

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashBoardPage}/>
        <Route exact path="/create" component={AddExpensePage}/>
        <Route exact path="/edit/:id" component={EditExpensePage}/>
        <Route exact path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;