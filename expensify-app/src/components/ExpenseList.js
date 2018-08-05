import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filteredExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: filteredExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList) ;  //conncet returns a function which needs to be called with the desired Component to get the HOC, hence ExpenseList is being passed to the output of connect(), which is a function with parametrs the new props. Thats how the API of redux-react is 

// export default ConnectedExpenseList;  // directly exporting is a more common pattern


// ====== IMPORTANT ======
// WHen a component is connected to the react store, the component is reactive, i.e. as the state changes, the changes are reflected in the component as it gets rerendered as soon as the state changes.