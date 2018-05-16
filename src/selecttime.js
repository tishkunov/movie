import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';
import Cinemas from './cinemas';

class Selecttime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selecttime:{
				margin:''
			},
		}
	}


	componentDidMount() {
		this.setState({selecttime:{margin:'10vh 0 0 0'}})	
	}

  render() {
  	if (this.props.component == 4) {
  		return <Redirect to='/selectseat' />
  	}
    return (<div className="select-time" id="select-time" style={this.state.selecttime}>
    	<span onClick={this.props.changeBg}>
	    		<Link to="/choosemovie" > BACK </Link>
	    </span>
	    <h2>SELECT TIME</h2>
	    <input placeholder="Find a cinema" onChange={this.props.search} type="text" />
	    <input className="datepciker" disabled value="Today  (05/21/18)" /> 
	    <Cinemas  choseTime={this.props.choseTime}/>
    	</div>);
  }
}

export default Selecttime;