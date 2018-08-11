import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt, history }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: {amount} </p>
    <p>Dated: {createdAt}</p>
  </div>
);  

export default ExpenseListItem;  // connect can now be reomved as react-router functionality is not used in this component now