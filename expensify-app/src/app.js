import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashBoardPage = () => (
  <div>
    <p>This is from my dashboard component</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>This is from my add expense component</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <h1>This is from my edit expense component</h1>
  </div>
);

const HelpPage = () => (
  <div>
    <h2>This is from my HelpPage component</h2>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashBoardPage}/>
      <Route exact path="/create" component={AddExpensePage}/>
      <Route exact path="/edit" component={EditExpensePage}/>
      <Route exact path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

