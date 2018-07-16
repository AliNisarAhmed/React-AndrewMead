

// let visible = false;

// const appRoot = document.querySelector("#app");

// const clickHandler = () => {
//   visible = !visible;
//   render();
// }

// const render = () => {
  
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={clickHandler}>
//         {visible ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visible && (
//         <p>Hey, Below are the details</p>
//       )
//       }
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// render();









// console.log('App.js is running');

// let app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: [],
// }

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     e.target.elements.option.focus();
//     renderOptions();
//   }

// }

// const removeAllOptions = () => {
//   app.options = [];
//   renderOptions();
// }

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   console.log('You should do: ', option);
// }


// const renderOptions = () => {
   
//   const template = (
//     <div>
//       <h1>Title: {app.title}</h1>
//       {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
    
//       <p>{app.options.length > 0 ? 
//           `Here are your options:` 
//           : 'You have no options'}</p>
        
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
          
//       <button onClick={removeAllOptions}>Remove All</button>

//       <hr/>
        
//       <ol>
//         {app.options.map(option => <li>{option}</li>)}

//       </ol>
        
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>
//       </form>

//     </div>
//       );
      
// }

// renderOptions();













// // let count = 0;

// // const addOne = () => {
// //   count++;
// //   renderCounter();
// // }

// // const minusOne = () => {
// //   count--;
// //   renderCounter();
// // }

// // const reset = () => {
// //   count = 0;
// //   renderCounter();
// // }

// // const renderCounter = () => {
// //   const templateTwo = (
// //     <div>
// //     <h1>Count: {count}</h1>
// //     <button id="button-1" onClick={addOne}>+1</button>
// //     <button id="button-2" onClick={minusOne}>-1</button>
// //     <button id="button-3" onClick={reset}>Reset</button>
// //     </div>
// //   );

// //   ReactDOM.render(templateTwo, appRoot);
// // }

// // renderCounter();