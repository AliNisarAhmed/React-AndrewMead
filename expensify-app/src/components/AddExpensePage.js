import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (  // props given by the connect call below 
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('./');  // this is the prop passed by React Routerm and is used to re route the page to the given path after submit.
      }}
    />
  </div>
);

export default connect()(AddExpensePage);