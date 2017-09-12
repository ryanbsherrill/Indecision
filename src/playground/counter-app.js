class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button>+1</button>
        <button>-1</button>
        <button>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
