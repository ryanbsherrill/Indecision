// Main App Component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { options: props.options };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

  }

  handleDeleteOptions() {
    this.setState(() => ( {options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
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
IndecisionApp.defaultProps = { options: [] };

// Header Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div> 
  );
};
Header.defaultProps = { title: 'Indecision' };

// Action Component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  );
};

// Options Component
const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

// Option Component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(event) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
      remove
      </button>
    </div>
  );
};

// AddOption Component
class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined };
    this.handleAddOption = this.handleAddOption.bind(this);
    
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({ error }));
  }

  render() {
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
