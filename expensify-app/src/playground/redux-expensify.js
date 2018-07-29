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

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});


//====== FILTERS Action Generators ===========

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});

// set end date
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
});



//==================================================

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
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
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

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));  // This dispatches the action to both reducers, expenses as well as filters

// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));

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