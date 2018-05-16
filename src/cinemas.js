import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';
import Cinema from './cinema';

class Cinemas extends Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		window.addEventListener("resize", ()=> {
			const scrollbar = document.getElementById('scrollbar');
			scrollbar.style.left = ((document.documentElement.clientWidth - 1120)/2) + 640 + 'px';
		});
		const scrollbar = document.getElementById('scrollbar');
		scrollbar.style.left = ((document.documentElement.clientWidth - 1120)/2) + 640 + 'px';
		setTimeout(()=>{
			scrollbar.style.display = "block";
		},1000)
	}


	scrol(event) {
		const scrollbar = document.getElementById('scrollbar');
		const cins = document.getElementById('cins');
		const cinemas = document.getElementsByClassName('cinema');
		scrollbar.style.top = 47+  ((cins.scrollTop/(cinemas.length*285 - parseInt(getComputedStyle(cins).height))*50)) + '%';
		if (cins.scrollTop < 100) {
			scrollbar.style.top = "calc(10vh + 300px)";
		}
		if (cins.scrollTop > 700) {
			scrollbar.style.top = "88%";
		}
	}


  render() {
    return (<div  className="cinemas" id="cins" onWheel={this.scrol.bind(this)}>
    	<Cinema phone={'+1 212-999-3333'} name={'Cinema village'} adress={'22 E 12th St, NY 10003'} rate={'8'} choseTime={this.props.choseTime} />
    	<Cinema name={'The Beekman Theatre'} phone={'+1 212-249-0807'} adress={'1271 2nd Ave, NY 10065'} rate={'7'} choseTime={this.props.choseTime} />
    	<Cinema name={'Quad Cinema'} adress={'34 W 13th St, NY 10011'} phone={'+1 212-255-2243'} rate={'9'} choseTime={this.props.choseTime} />
    	<Cinema name={'Cinépolis Chelsea'} adress={'260 W 23rd St, NY 10011'} phone={'+1 212-691-5519'} rate={'8'} choseTime={this.props.choseTime} />
    	<Cinema name={'Village East Cinema'} phone={'+1 212-529-6998'} adress={'181-189 2nd Ave, NY 10003'} rate={'7'} choseTime={this.props.choseTime} />
    	<div id="scrollbar"></div>
    	</div>);
  }
}

export default Cinemas;