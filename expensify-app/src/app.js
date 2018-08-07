import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();


store.dispatch(addExpense({description: 'Water bill', amount: 1500}));

store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

// store.dispatch(setTextFilter('gas'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

console.log(store.getState());

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });


//this provides store to all components of AppRouter

const jsx = (
  <Provider store={store}>   
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

