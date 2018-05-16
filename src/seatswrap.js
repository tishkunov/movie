import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';
import Seat from './seat';

class Seatswrap extends Component {
	constructor(props) {
		super(props);
		
	}

  render() {
  	
    return (<div className="seats-wrap">
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">1</p>
      	<Seat   row="1" vertical="1"  />
        <Seat row="1" vertical="2"  />
        <Seat row="1" vertical="3"  />
        <Seat row="1"  vertical="4"  />
        <Seat row="1" vertical="5" />
        <Seat row="1"  vertical="6" />
        <Seat row="1"  vertical="7" />
        <Seat row="1"  vertical="8" />
        <Seat row="1" vertical="9" />
        <Seat row="1" vertical="10" />
        <Seat row="1" vertical="11" />
        <Seat row="1" vertical="12" />
        <Seat row="1" vertical="13" />
        <Seat row="1" vertical="14" />
        <p className="right-row">1</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">2</p>
        <Seat dis={"disabled"}  row="2" vertical="1" />
        <Seat row="2" vertical="2" />
        <Seat row="2" vertical="3" />
        <Seat row="2" vertical="4" />
        <Seat row="2" vertical="5" />
        <Seat row="2" vertical="6" />
        <Seat row="2" vertical="7" />
        <Seat dis={"disabled"} row="2" vertical="8" />
        <Seat row="2" vertical="9" />
        <Seat row="2" vertical="10" />
        <Seat  row="2" vertical="11" />
        <Seat  row="2" vertical="12" />
        <Seat row="2" vertical="13" />
        <Seat dis={"disabled"} row="2" vertical="14" />
        <p className="right-row">2</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">3</p>
        <Seat row="3" vertical="1"  />
        <Seat row="3" vertical="2" />
        <Seat row="3" vertical="3" />
        <Seat row="3" vertical="4"  />
        <Seat row="3" dis={"disabled"} vertical="5" />
        <Seat row="3" vertical="6" />
        <Seat row="3" vertical="7" />
        <Seat row="3" vertical="8" />
        <Seat row="3" vertical="9" />
        <Seat row="3" vertical="10" />
        <Seat dis={"disabled"} vertical="11" row="3" />
        <Seat dis={"disabled"} vertical="12" row="3" />
        <Seat dis={"disabled"} vertical="13" row="3" />
        <Seat row="3" vertical="14" />
        <p className="right-row">3</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">4</p>
        <Seat row="4" vertical="1"  />
        <Seat row="4" vertical="2" />
        <Seat row="4" vertical="3" />
        <Seat row="4" vertical="4"  />
        <Seat row="4" dis={"disabled"} vertical="5" />
        <Seat row="4" vertical="6" />
        <Seat row="4" vertical="7" />
        <Seat row="4" vertical="8" />
        <Seat row="4" vertical="9" />
        <Seat row="4" vertical="10" />
        <Seat  vertical="11" row="4" />
        <Seat  vertical="12" row="4" />
        <Seat  vertical="13" row="4" />
        <Seat row="4" vertical="14" />
        <p className="right-row">4</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">5</p>
        <Seat row="5" vertical="3" />
        <Seat row="5" vertical="4"  />
        <Seat row="5" dis={"disabled"} vertical="5" />
        <Seat row="5" vertical="6" />
        <Seat row="5" vertical="7" />
        <Seat row="5" vertical="8" />
        <Seat row="5" vertical="9" />
        <Seat row="5" vertical="10" />
        <Seat  vertical="11" row="5" />
        <Seat  vertical="12" row="5" />
        <p className="right-row">5</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">6</p>
        <Seat row="6" vertical="3" />
        <Seat row="6" vertical="4"  />
        <Seat row="6" dis={"disabled"} vertical="5" />
        <Seat row="6" vertical="6" />
        <Seat row="6" vertical="7" />
        <Seat row="6" vertical="8" />
        <Seat row="6" vertical="9" />
        <Seat row="6" vertical="10" />
        <Seat  vertical="11" row="6" />
        <Seat  vertical="12" row="6" />
        <p className="right-row">6</p>
      </div>
      <div className="wrpspsps" onClick={this.props.chosedseat}>
        <p className="left-row">7</p>
        <Seat row="7" vertical="1"  />
        <Seat row="7" vertical="2" />
        <Seat row="7" vertical="3" />
        <Seat row="7" vertical="4"  />
        <Seat row="7" dis={"disabled"} vertical="5" />
        <Seat row="7" vertical="6" />
        <Seat row="7" vertical="7" />
        <Seat row="7" vertical="8" />
        <Seat row="7" vertical="9" />
        <Seat row="7" vertical="10" />
        <Seat dis={"disabled"} vertical="11" row="7" />
        <Seat  vertical="12" row="7" />
        <Seat  vertical="13" row="7" />
        <Seat row="7" vertical="14" />
        <p className="right-row">7</p>
      </div>
    	</div>);
  }
}

export default Seatswrap;