/**
 * METHODS:
 * componentDidMount => when component first mounts to DOM
 * componentDidUpdate => when state changes => has access to prevProps and prevState
 * componentWillUnmount => when component goes away
 * handlePick => choose random option to display
 * handleDeleteOptions => remove all options
 * handleDeleteOption => remove a single option
 * handleAddOption => add new option
*/
import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) this.setState(() => ({ options }));
    } catch (error) {
      console.log(error);
    } console.log('fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleDeleteOptions() {
    this.setState(() => ( {options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add and option';
    } else if (this.state.options.indexOf(option) > - 1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
    </div>
    );
  }
}
