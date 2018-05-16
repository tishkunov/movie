import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';


class Bookticket extends Component {
	constructor(props) {
		super(props);
    	this.handleButtonAnimate = this.handleButtonAnimate.bind(this);
    	this.handleButton = this.handleButton.bind(this);
    	this.state = {
    		current:1,
    	}
	}

 	handleButtonAnimate(e) {
		let em = e.target.lastElementChild.style;
		em.display = "block";
		let bkticket = document.getElementById('book-ticket');
		let buttonAnimate = (times = 40) => {
			let buttonAnimate =	setInterval(() => {
			if (times > 210) {
	        	clearInterval(buttonAnimate);
	        	em.width = "208px"; em.height = "54px"; em.marginLeft = "0";
	    		em.marginTop = "0";	em.top = "0";	em.left = "0";	 em.borderRadius = "0";	
	    		
	    		bkticket.classList.add('book-ticket_top');
	    		setTimeout(()=> {this.setState({current: 2})},500)
	    	} else {
	    		
	    		times += 4.5;
	    		em.width = times + 'px';	
	    		em.marginLeft = '-' + (times/2) + 'px'; 
	    		if (times < 150) {
	    			em.height = times + 'px'; em.marginTop = '-' + (times/2) + 'px'
	    		}	
	    			

	    	}
			}, 2);
		} 

		buttonAnimate();

	}

	handleButton(event) {
		this.handleButtonAnimate(event);
		return this.props.handleBg();
	}


  render() {
  	if (this.state.current == 2) {
	  return <Redirect to="/choosemovie" />;
	}
    return (<div className="book-ticket" id="book-ticket">
	    	<h2>BOOK CINEMA TICKETS ONLINE</h2>
	    	<p>Find extensive information on every movie theater, including what movies are playing as well as show times. For many theaters and movies we offer online ticketing.</p>
	    	<button onClick={this.handleButton} onMouseUp={this.handleButton}>BOOK A TICKET <span></span></button>
    	</div>);
  }
}

export default Bookticket;