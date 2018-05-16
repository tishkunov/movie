import React, { Component } from 'react';
import './App.css';

class Carouselarrows extends Component {
	constructor(props) {
		super(props);
		
	}
	
  render() {
  	
    return (<div className="carousel-arrows" id="arrow">
    	<button className="left-arrow" onClick={this.props.prev}></button>

    	<p>{this.props.td}/{Math.ceil(this.props.pages/6)}</p>
      
    	<button className="right-arrow" onClick={this.props.next}></button>
    	</div>);
  }
}

export default Carouselarrows;