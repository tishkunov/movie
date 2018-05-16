import React, { Component } from 'react';
import './App.css';


class Secondbg extends Component {
	constructor(props) {
		super(props);
		this.backgroundChange = this.backgroundChange.bind(this);
	}

	
	backgroundChange(event) {
			const secondBgImg = document.getElementsByClassName('second-bg_img');
			for (let i = 0; i < secondBgImg.length; i++) {
				secondBgImg[i].classList.add('start');
			}
	}

	backgroundChange1(event) {
		const secondBgImg = document.getElementsByClassName('second-bg_img');
		for (let i = 0; i < secondBgImg.length; i++) {
				secondBgImg[i].classList.remove('start');
				secondBgImg[i].classList.add('down');
			}
		console.log(secondBgImg);
	}



  render() {
  	console.log(this.props.currentBg)
  	if (this.props.currentBg == 1.5) {
  		this.backgroundChange1();
  	}
    return (<div className="second-bg">
    	<img src="img/2first-bg.jpg"  onLoad={this.backgroundChange}  bounce="true" speed="20"  className="second-bg_img" alt="first-bg"/>
    	<img src="img/2fourth-bg.jpg"  onLoad={this.backgroundChange}  speed="1" className="second-bg_img" alt="first-bg"/>
    	<img src="img/2third-bg.jpg"  onLoad={this.backgroundChange}   speed="6" className="second-bg_img" alt="first-bg"/>
    	<img src="img/2second-bg.jpg"  onLoad={this.backgroundChange} bounce="true"  speed="12" className="second-bg_img" alt="first-bg"/>
    	<img src="img/1first-bg.jpg" alt="first-bg"/>
    	<img src="img/1second-bg.jpg" alt="first-bg"/>
    	<img src="img/1third-bg.jpg" alt="first-bg"/>
    	<img src="img/1fourth-bg.jpg" alt="first-bg"/>

    	</div>);
  }
}

export default Secondbg;