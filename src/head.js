import React, { Component } from 'react';
import './App.css';
import Logo from './logo';
import Changecity from './changeCity';

class Head extends Component {
  render() {
  	
    return (<div className="head">
    	<Logo />
   		<Changecity />
   		<img src="img/pac.png" className="pac" alt="pac" />
   		<h2 className="city-name">NEW-YORK</h2>
    	</div>);
  }
}

export default Head;