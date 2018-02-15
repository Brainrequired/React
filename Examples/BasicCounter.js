class Button extends React.Component {	
  handleClick = () => {
  	this.props.onClickFunction(this.props.value)
  };
  
	render() {
  	return(
    	<button onClick = {this.handleClick}>
      	+{this.props.value}
      </button>
    );
  };
}

const Result = (props) => {
  	return(
    	<div>{props.updated}</div>	
    );
};

class App extends React.Component {
	state = {counter: 0};
  
  increaseValue = (increment) => {
  	this.setState((prevState) => ({
    	counter: prevState.counter + increment
    }));
  };
  
	render(){
  	return(
    	<div>
      <Button onClickFunction = {this.increaseValue} value = {1}/>
      <Button onClickFunction = {this.increaseValue} value = {5}/>
      <Button onClickFunction = {this.increaseValue} value = {10}/>
      <Button onClickFunction = {this.increaseValue} value = {100}/>
      <Result updated = {this.state.counter}/>
      </div>
    );
  };
}

ReactDOM.render(<App />, mountNode);





