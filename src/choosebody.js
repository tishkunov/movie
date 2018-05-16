import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';

class Choosebody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {

			}
		}
	}

	componentDidMount(times = 100) {
		setTimeout(()=> {this.setState({movie:{
			margin:"calc(30vh - 160px) 0 0 0"
		}})},500)	
	}

  render() {
  	
    return (
    	<div className="choose-movie_body" id="choose-movie_body" style={this.state.movie}>
	    	<span onClick={this.props.changeBg}>
	    		<Link to="/" > BACK </Link>
	    	</span>
	    	<h2>CHOOSE A MOOVIE</h2>
	    	<input placeholder="Find a moovie" onChange={this.props.search} type="text" />
    	</div>);
  }
}

export default Choosebody;