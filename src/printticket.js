import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';


class Printticket extends Component {
	constructor(props) {
		super(props);
		this.state = {
      styles:{
        top:'100vh'
      }
    }
	}

  componentDidMount() {
    setTimeout(()=>{
      this.setState({styles:{
      top:'30vh'
    }})
    },4)
    return this.props.redir;
  }  


  render() {
    return (<div className="print-ticket" style={this.state.styles}>
      <h2>Congrats</h2>
      <p>Your ticket has been successfully booked.</p>
      <button className="submit-seat">PRINT</button>
      <button className="print-ticket_close">CLOSE</button>
    	</div>);
  }
}

export default Printticket;