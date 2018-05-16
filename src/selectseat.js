import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';
import Seatswrap from './seatswrap';
import Yourseats from './yourseats';

class Selectsats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seatsstyle: {
				top: '100vh'
			},
			screenseat: {
				top: '100vh'
			},
			screens:6,
			row:0,
			vertical:0,
			styles:{

			},
			redirect:false
		}
		this.submitSeat = this.submitSeat.bind(this);
	}

	chosedSeat(event) {
		let e = event.target;
		if (e.tagName == 'DIV') {
			const seats = document.getElementsByClassName('seat');
			for (let i = 0; i < seats.length; i++) {seats[i].classList.remove('choosed');}
			e.classList.add("choosed");
			e.style.left = parseInt(getComputedStyle(e).left) - 2 + 'px';
			e.style.top = parseInt(getComputedStyle(e).top) - 3 + 'px';
			this.setState({row:e.getAttribute('row'),vertical:e.getAttribute('vertical')})
		}
	}

	componentDidMount() {
		setTimeout(()=> {
			this.setState({seatsstyle:{top:'30vh'},screenseat:{top:'15vh'}})
		},500)
	}

	submitSeat() {
		setTimeout(()=>{
			this.setState({seatsstyle:{top:'-100vh'},styles:{top:'-100vh'}})
		},400);
		setTimeout(()=>{
			
			this.setState({redirect:true})
		},1300);
		return this.props.redir();
		
	}

  render() {
  	if (this.state.redirect) {
  		return <Redirect to='/printticket' />
  	}
  	const {screenseat, seatsstyle,screens,row,vertical} = this.state;
    return (<div className="select-seats" style={seatsstyle}>
    	<span>
	    	<Link to="/selecttime" > BACK </Link>
	    </span>
	    <h2>SELECT SEATS</h2>
	    <div className="screen" style={screenseat}>Screen</div>
	    <Seatswrap chosedseat={this.chosedSeat.bind(this)} />
	    <button className="submit-seat" onClick={this.submitSeat}>SUBMIT</button>
	    <Yourseats 
	    	row={row}
	    	seat={vertical}
	    	screens={screens} />
    	</div>);
  }
}

export default Selectsats;