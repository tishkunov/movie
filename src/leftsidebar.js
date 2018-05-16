import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import addTypeAction from "./actions/addType";
import createBrowserHistory from "history/createBrowserHistory";
import Onetypefilter from "./onetypefilter";

class Leftsidebar extends Component {
	constructor(props) {
		super(props);
		this.onAddToType = this.onAddToType.bind(this);
		
	}

	onAddToType(event) {
		this.props.addTypeFunction(event.target.getAttribute('typefilter'));
		
	}

	onProductSearch(event) {
		this.props.productSearch(event.target.value);
	}
	
	
  render() {
  	
    return (<div className="left-sidebar">
    	<input placeholder="Search" className="search" onKeyUp={this.props.onProductSearch} onBlur={this.props.onProductSearch} />	
    	<div className="hr-line"></div>
    	<div className="">
	    	<p className="types-h">Types</p>
	    	<div className="wrap-types">
	    		<Onetypefilter isClearAll={this.props.clearAll} getTypeFunctionTred={this.props.typesFunction} typename="CITY BIKE" />
	    		<Onetypefilter isClearAll={this.props.clearAll} getTypeFunctionTred={this.props.typesFunction} typename="BMX" />
	    		<Onetypefilter isClearAll={this.props.clearAll} getTypeFunctionTred={this.props.typesFunction} typename="ROAD BIKE" />
	    		<Onetypefilter isClearAll={this.props.clearAll} getTypeFunctionTred={this.props.typesFunction} typename="HYBRID" />
	    		<Onetypefilter isClearAll={this.props.clearAll} getTypeFunctionTred={this.props.typesFunction} typename="MOUNTAIN Bike" />
	    		<button onClick={this.props.onShowAllType} className="show-all">Show</button>	
	    		
	    	</div>
	    	</div>
    	</div>);
  }
}

function mapStateToProps(state) {
  return  {
    clearAll: state.productsInfo.clearAll
    
  }
}
export default connect(mapStateToProps)(Leftsidebar);
