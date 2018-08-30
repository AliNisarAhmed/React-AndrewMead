import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/'); 
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm 
          onSubmit={this.onSubmit}
          expense={this.props.expense}
        />
        <button 
          onClick={this.onClick}
        >
          Remove
        </button>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  };
}; 

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


/*
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

*/