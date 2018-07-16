
// COUNTER - REACT COMPONENTS

class Counter extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        count: 0,
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    this.setState(() => ({count}));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    })
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));





//===========================================================================================

// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props); 
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleRemoveOption = this.handleRemoveOption.bind(this);

//     this.state = {
//       options: props.options,
//     }
//   }

//   componentDidMount() {
//     try {
//       const json = localStorage.getItem('options');
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState( () => ({ options }));
//       } 
//     } catch (error) {
//       // Do nothing at all
//       // try catch is meant to catch anu errors such as invalid JSON to parse
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       console.log("saving data");
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem('options', json);
//     }
//   }

//   handleDeleteOptions() {
//     this.setState(() => ( {options: []} ))
//   }

//   handleRemoveOption(optionToRemove) {
//     this.setState( (prevState) => ( 
//       { options: prevState.options.filter(opt => opt !== optionToRemove) } 
//     ));
//   }

//   handlePick() {
//     let random = Math.floor(Math.random() * this.state.options.length);
//     alert(this.state.options[random]);
//   }

//   handleAddOption(option) {
//     if(!option) {
//       return "Enter valid value to add item"
//     } else if (this.state.options.indexOf(option) !== -1) {
//       return "This option is already in the list"
//     }
//     this.setState((prevState) => ( {options: prevState.options.concat(option)} ));
//   }


//   render() {
//     const subtitle = 'Put your life in the hands of a computer';
 
//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action 
//           hasOptions={this.state.options.length > 0}
//           handlePick={this.handlePick}
//           />
//         <Options 
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleRemoveOption={this.handleRemoveOption}  
//         />
//         <AddOption 
//           handleAddOption={this.handleAddOption}
//         />
//       </div>
//     );
//   }
// } 

// IndecisionApp.defaultProps = {
//   options: []
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
//   );
// } 
  
// Header.defaultProps = {
//   title: "Indecision"
// };  

// const Action = (props) => {
//   return (
//     <div>
//       <button 
//         onClick={props.handlePick}
//         disabled={!props.hasOptions}
//         >
//           What should I do?
//       </button>
//     </div>
//   );
// }


// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       {props.options.length === 0 && <p>Please add an option to get started!</p>}
//       {
//         props.options.map(option => (
//           <Option 
//             key={option} 
//             optionText={option} 
//             handleRemoveOption={props.handleRemoveOption}
//             />
//         ))
//       }
//     </div>
//   );
// }

// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       <button 
//         onClick={(e) => {
//           props.handleRemoveOption(props.optionText);
//         }}
//         >
//         Remove
//       </button>
//     </div>
//   );
// }

// class AddOption extends React.Component{
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);

//     this.state = {
//       error: undefined
//     }
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
    
//     this.setState(() => ( { error } ));

//     if(!error) {
//       e.target.elements.option.value = '';
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form action="#" onSubmit={this.handleAddOption}>
//           <input type="text" name="option"/>
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }


// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));



// =======================//


// ================================================================

// TOGGLE VISIBILITY - COMPONENT VERSION

/*

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
        {
          this.state.visibility && (
            <div>
              <p>Hey, these are the details</p>
            </div>
          )
        }
      </div>
    );
  }
}


ReactDOM.render(<Visibility />, document.getElementById("app"));

*/