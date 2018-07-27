import { createStore, combineReducers } from 'redux';

// Actions
// ADD_EXPENSE
// REMOVE_EXPENSE
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

console.log('store.getState() :', store.getState());


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