import React, { Component } from 'react';
import './App.css';
import Secondbg from './secondbg';

class Background extends Component {
	constructor() {
    	super();
    	this.state = {
     	 currentBg : 1,
    	}
  	}	


  render() {
    const {currentBg} = this.props;
  	if (currentBg == 2 || currentBg == 1.5) {
  		return (<Secondbg currentBg={currentBg} />
    	);
  	}
    return (<div className="background">
    	<img src="img/1first-bg.jpg" alt="first-bg"/>
    	<img src="img/1second-bg.jpg" alt="first-bg"/>
    	<img src="img/1third-bg.jpg" alt="first-bg"/>
    	<img src="img/1fourth-bg.jpg" alt="first-bg"/>
    	</div>);
  }
}

export default Background;