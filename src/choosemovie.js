import React, { Component } from 'react';
import './App.css';
import Choosebody from './choosebody';
import Films from './films';
import Carouselarrows from './arrows';

class Choosemovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films:[],
			carouselPage:1,
			carouselactive:'none',
			kedd:false
		}
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	
	componentDidMount() {
		 fetch("/films.json", {
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
     })
      .then(response => response.json())
      .then(json => {
        this.setState({
          films: json.films,
          filmscopy:json.films
        });
      });
      setTimeout(()=>{this.setState({carouselPage:1})},100)
	}

	handlePrev() {
		this.setState({carouselactive:'active'})
		const films = document.getElementsByClassName('film-wrap');
		for (let i = 0; i < films.length; i++) {films[i].style.transitionDelay = '.3s'; films[i].style.left = null;}
		
		setTimeout(()=>{
			const films = document.getElementsByClassName('film-wrap');
				switch(this.state.carouselPage) {
				case 1: 
				this.setState({carouselPage:Math.ceil(this.state.films.length/6)})
				break;
				default:
				this.setState({carouselPage:this.state.carouselPage -1})
				break;
			}

		},950)
		setTimeout(()=>{
			this.setState({carouselactive:'none'})
		},1500)
	}

	handleNext() {
		this.setState({carouselactive:'active'})
		const films = document.getElementsByClassName('film-wrap');
		for (let i = 0; i < films.length; i++) {films[i].style.transitionDelay =  '.3s';films[i].style.left = null;}
		
		setTimeout(()=>{
			const films = document.getElementsByClassName('film-wrap');
			
				switch(this.state.carouselPage) {
				case Math.ceil(this.state.films.length/6):
				this.setState({carouselPage:1})
				break;
				default:
				this.setState({carouselPage:this.state.carouselPage +1})
				break;
			}

		},950)
		setTimeout(()=>{
			this.setState({carouselactive:'none'})
		},1500)
	}

	searchFilm(event) {
		let e = event.target.value;
		if (!e || e == '') {
			this.setState({films:this.state.filmscopy, carouselPage:1});
		}
		else {
			this.setState({films:this.state.filmscopy.filter((item,index)=>{
			if (item.name.indexOf(e) != -1) {
				return item;
			}
			}),carouselPage:1})
		}
		
	}

	sss() {
		this.setState({kedd:true})
	}


  render() {
    return (
    	<div className="choose-movie" id="choose-movie">
	    	<Choosebody search={this.searchFilm.bind(this)} changeBg={this.props.changeBgToFirst} />
	    	<Films kedd={this.state.kedd} setSt={this.sss.bind(this)} carouselactive={this.state.carouselactive}  chosename={this.props.chosename} films={this.state.films} td={this.state.carouselPage} pages={this.state.films.length} />
	    	<Carouselarrows td={this.state.carouselPage} next={this.handleNext} prev={this.handlePrev}  pages={this.state.films.length}  />
    	</div>);
  }
}

export default Choosemovie;