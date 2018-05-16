import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';


class Seat extends Component {
	constructor(props) {
		super(props);
		this.state = {
      slide:false
    }
	}

  componentDidMount() {
    setTimeout(()=>{
      this.setState({slide:true})
    },900)
  }


  render() {
    return (<div 
      className={'seat ' + (this.props.dis ? 'disabled ' : '') + (this.state.slide ? 'slide' : '')}
      vertical={this.props.vertical}
      row={this.props.row}>
    	</div>);
  }
}

export default Seat;