import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
 
  state = {
    options : [],
    selectedOption: null
  }

  handleDeleteOptions = () => {
    this.setState(() => ( {options: []} ))
  };

  handleRemoveOption = (optionToRemove) => {
    this.setState( (prevState) => ( 
      { options: prevState.options.filter(opt => opt !== optionToRemove) } 
    ));
  };

  handlePick = () => {
    let random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ( {selectedOption: option} ));
  };

  handleAddOption = (option) => {
    if(!option) {
      return "Enter valid value to add item"
    } else if (this.state.options.indexOf(option) !== -1) {
      return "This option is already in the list"
    }
    this.setState((prevState) => ( {options: prevState.options.concat(option)} ));
  };

  clearSelectedOption = () => {
    this.setState(() => ( {selectedOption: null} ));
  }


  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState( () => ({ options }));
      } 
    } catch (error) {
      // Do nothing at all
      // try catch is meant to catch anu errors such as invalid JSON to parse
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }



  render() {
    const subtitle = 'Put your life in the hands of a computer';
 
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleRemoveOption={this.handleRemoveOption}  
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}  
        />
      </div>
    );
  }
}

export default IndecisionApp;



