import React, { Component } from 'react';
import './App.css';

class Yourseats extends Component {
	constructor(props) {
		super(props);
		this.state = {
      slide:false
    }
	}

  render() {
    const {row, seat, screens} = this.props;
    return (
      <div style={this.props.styles} className={'your-seats ' + (row != 0 ? 'top' : '')}>
      	<h3>Your seats</h3>
        <div className="your-seats-wrap">
          <div>
            {screens}<br />
            <span>Screen</span>
          </div>
          <div>
            {row}
            <br />
            <span>Row</span>
          </div>
          <div>
            {seat}<br />
            <span>Seat</span>
          </div>
        </div>
    	</div>);
  }
}

export default Yourseats;