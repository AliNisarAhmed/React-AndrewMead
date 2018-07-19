import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = 'Ali'
//   }
//   getGreeting() {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// // const getGreeting = oldSyntax.getGreeting; // This breaks 'this'
// // console.log(getGreeting());

// // ==== New Syntax - thanks to babel plugin transform-class-properties

// class NewSyntax {
//   name = "Sam";
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}`;
//   }
// }

// const newSyntax = new NewSyntax();
// const getGreeting2 = newSyntax.getGreeting;
// console.log(getGreeting2());
