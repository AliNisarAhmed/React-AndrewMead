// We cant just import moment from 'moment' here because the mock moment has been used below, and this will cause stack error,

// we use the method provided by jest to import the original moment in the mocjk

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};

// **NOTE** 

// We need this mock because ExpenseForm used an instance of moment to create a moment date either at the current time or the user provided timestamp. however, the current time will change every time the test is run, hence the test fails every time, to overcome this, we 'mock' the moment library here