import React, { Component } from 'react';
import './App.css';


class Lines extends Component {
  render() {
  	
    return (<div className="lines-divide">
	    	<div className="lines-divide__line"></div>
	    	<div className="lines-divide__line"></div>
	    	<div className="lines-divide__line"></div>
	    	<div className="lines-divide__line"></div>
    	</div>);
  }
}

export default Lines;