const Card = (props) => {
	return (
  	<div>
  	  <img width = "75" src = {props.avatar_url} />
    <div style={{display: 'inline-block', marginLeft: 10}}>
      <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
      	{props.name}
      </div>
      <div><i>{props.company}</i></div>
  	</div>
    </div>
  );
};

class Form extends React.Component {
	state = { userName: '' }

	handleClick = (event) => {
  	event.preventDefault();
    axios.get('https://api.github.com/users/' + this.state.userName).then(resp =>{
    	this.props.onSubmit(resp.data);
    });
  };

	render(){
  	return(
    	<div>
      	<form onSubmit = {this.handleClick}>
          <input type = "text" 
          	value = {this.state.userName}
            onChange={(event) => this.setState({userName: event.target.value})}
            placeHolder = "GitHub Username" required />
          <button type="submit">Add card</button>
    		</form>
      </div>
    );
  };
}

const CardList = (props) => {
	return(
  	<div>
  	  {props.cards.map(x=><Card {...x}/>)}
  	</div>
  );
};

class App extends React.Component {
	state = {
  	cards : []
  };
  
  addNewCard = (data) => {
  	this.setState((prevState) => ({
    	cards : prevState.cards.concat(data)
    }));
  }
  
	render(){
  	return(
    	<div>
        <Form onSubmit = {this.addNewCard}/>
        <CardList cards={this.state.cards}/>
    	</div>
    );
  };
}

ReactDOM.render(<App />,mountNode);