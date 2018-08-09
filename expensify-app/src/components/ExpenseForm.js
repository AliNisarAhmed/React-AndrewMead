import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log('now :', now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
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
    if (amount.match(/^\d*(\.\d{0,2})?/)) {   // match only if it matches the pattern xxxx.xx
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {   // focused is the value that comes back from the component depending on whether calendar is focused or not
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
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