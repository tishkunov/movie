import React, { Component } from 'react';
import './App.css';
import { Redirect,Link } from 'react-router-dom';

class Cinema extends Component {
    constructor(props) {
        super(props);
        
    }

  render() {
    const {name, phone, rate, adress} = this.props;
    return (<div className="cinema">
        <div className="cinemas-head">
            <div className="cinemas-head_name-adress">
                <h3>{name}</h3>
                <p>{adress}</p>
            </div>
            <div className="cinemas-head_phone-rate">
                <a href="#">{phone}</a>
                <p><img src="img/star-icon.png" /> {rate}/10</p>
            </div>
        </div>
        <div className="cinemas-body">
            <div className="cinemas-body_type3d">
                <div className="cinemas-body_type3d-h">3D</div>
                <div className="cinemas-body_type3d-time">
                    <strong onClick={this.props.choseTime}>9:00 AM</strong>
                    <span>from $9</span>
                </div>
                <div className="cinemas-body_type3d-time">
                    <strong onClick={this.props.choseTime}>11:30 AM</strong>
                    <span>from $12</span>
                </div>
                <div className="cinemas-body_type3d-time">
                    <strong onClick={this.props.choseTime}>2:15 PM</strong>
                    <span>from $15</span>
                </div>
                <div className="cinemas-body_type3d-time">
                    <strong onClick={this.props.choseTime}>4:40 PM</strong>
                    <span>from $15</span>
                </div>
                <div className="cinemas-body_type3d-time">
                    <strong onClick={this.props.choseTime}>8:40 PM</strong>
                    <span>from $15</span>
                </div>
            </div>
            <div className="cinemas-body_type2d">
                <div className="cinemas-body_type2d-h">2D</div>
                <div className="cinemas-body_type2d-time">
                    <strong onClick={this.props.choseTime}>8:30 AM</strong>
                    <span>from $5</span>
                </div>
                <div className="cinemas-body_type2d-time">
                    <strong onClick={this.props.choseTime}>10:30 AM</strong>
                    <span>from $12</span>
                </div>
                <div className="cinemas-body_type2d-time">
                    <strong onClick={this.props.choseTime}>1:00 AM</strong>
                    <span>from $15</span>
                </div>
                <div className="cinemas-body_type2d-time">
                    <strong onClick={this.props.choseTime}>3:20 PM</strong>
                    <span>from $15</span>
                </div>
                <div className="cinemas-body_type2d-time">
                    <span></span>
                </div>
            </div>
        </div>
        </div>);
  }
}

export default Cinema;