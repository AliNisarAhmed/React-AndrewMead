import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log('now :', now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  // To check whether an expense prop was sent down thru the ExpenseForm, we have to use the contructor method to define state, so that we use the expense object as the default state if it is passed down, but use default values if there is no expense object passed down as prop (which will be the case only when ExpenseForm is being used in the context of AddNewExpense)

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt): moment(),
      calendarFocused: false,
      error: ''
    }
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));

    // There is another way to use e.target.value shown below
    // this.setState(() => ({ note: e.target.value }));

    // However, the problem is that event object is gone once the callback is run, so to make the event object persist, we use => 
    // e.persist()
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?/)) {   // match only if it matches the pattern xxxx.xx
      // !amount above allows us to clear the field, without it the regex never matches the empty input field
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) {  // this if statement prevents the user from clearing the date field 
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {   // focused is the value that comes back from the component depending on whether calendar is focused or not
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount'
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      // Clear the error
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({  // This is the onSubmit from the props, used to pass in the location of the redirect link, as well as the expense object so that it can be dispatched to the store.
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),  // to convert to unix time
        note: this.state.note
      });
    }
  } 

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}!</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"  // to enforce custom validation of our choice, we use "text" type instead of number
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker   // from react-dates
            date={this.state.createdAt}  // moment object where you want to start the dates
            onDateChange={this.onDateChange}  
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}  // this makes everyday in the past available to us, we can pass a day argument to the function to choose days we like
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}