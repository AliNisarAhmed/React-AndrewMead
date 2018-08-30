import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}


/*

const AddExpensePage = (props) => (  // props given by the connect call below 
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        //props.dispatch(addExpense(expense));
        props.onSubmit(expense); 
        // The above step helps us in converting the props.dispatch call to a more testable version, (addExpense function is the problem in testing since it is imported rather than passed down as props).

        // We use mapDispatchToProps from redux api below.
        
        props.history.push('./');  // this is the prop passed by React Routerm and is used to re route the page to the given path after submit.
      }}
    />
  </div>
);

*/

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);