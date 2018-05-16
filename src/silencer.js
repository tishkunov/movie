import React, { Component } from 'react';
import './App.css';

class Silencer extends Component {
	constructor(props) {
		super(props);
		
	}

  render() {
    return (
      <div className="silencer">
      	<h3>Sorry, application is only available for desktop devices</h3> 
    	</div>);
  }
}

export default Silencer;