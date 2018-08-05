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


store.dispatch(addExpense({description: 'water bill'}));

store.dispatch(addExpense({description: 'Gas bill'}));

store.dispatch(setTextFilter('gas'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

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

