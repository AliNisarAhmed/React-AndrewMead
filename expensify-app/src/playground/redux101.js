import { createStore } from 'redux';

// Action generators - fumctions that return Action Objects

const incrementCount = ({ incrementBy  = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count 
});

const resetCount = () => ({
  type:"RESET"
});


// Reducers
// 1. Reducerrs are pure Functions
// 2. Never change state or action from inside

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    const incrementBy = action.incrementBy ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const { decrementBy = 1 } = action;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default: 
      return state;
  }
}

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

