import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Actions
// ADD_EXPENSE

const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
})
// EDIT_EXPENSE
// SET_TEXT_FILTER
// sort by date
// sort by amount
// set start date
// set end date


// Expenses Reducer

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);  
    default: 
      return state;
  }
};

// Filters Reducer

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};


const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// STore Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log('store: ', store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));  // This dispatches the action to both reducers, expenses as well as filters

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))


// DEMO STATE

const demoState = {
  expenses: [
    {
      id: 'ksjdnvgksngv',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500, // in pences, so actually $545,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',  // search for a string
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}