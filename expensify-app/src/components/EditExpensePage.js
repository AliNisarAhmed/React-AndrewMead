import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        onSubmit={(expense) => {
          // dispatch the action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense));

          // redirect to the dashboard page
          props.history.push('/'); 
        }}
        expense={props.expense}
      />
      <button 
        onClick={() => {
          props.dispatch(removeExpense(props.expense));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}; 

export default connect(mapStateToProps)(EditExpensePage);