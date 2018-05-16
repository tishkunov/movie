import React, { Component } from 'react';
import './App.css';
import Choose from './choosemovie';
import Lines from './lines';
import Head from './head';
import Bookticket from './bookticket';
import Background from './background';
import Ticketwrap from './ticketwrap';
import Selecttime from './selecttime';
import Selectseat from './selectseat';
import Printticket from './printticket';
import Silencer from './silencer';
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link, Redirect } from 'react-router-dom';



const history = createBrowserHistory();


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBg : 1,
      chosedfilm:'',
      chosedtime:'',
      adress:'',
      phone:'',
      date:'21 may',
      price:'',
      name:'',
      year:2018,
      component:0,
      opacity:{
        opacity:'0'
      }
    }
    this.handleStateBgToFirst = this.handleStateBgToFirst.bind(this);
    this.chosename = this.chosename.bind(this);
    this.choseTime = this.choseTime.bind(this);
  }

  
  chosename(event) {
    this.setState({chosedfilm:event.target.parentNode.getAttribute('names')})
  }

  handleStateBg() {
    setTimeout(()=> {
      this.setState({currentBg : 2})
    },1000)
  }

  handleStateBgToFirst() {
    setTimeout(()=> {
      this.setState({currentBg : 1.5})
    },300)
    setTimeout(()=>{
this.setState({currentBg : 1})
    },1500)
  }

  choseTime(event) { 
    let e = event.target;
    let cinemaname = e.parentNode.parentNode.parentNode.previousSibling.firstChild.firstChild.innerHTML;
    let cinemadress = e.parentNode.parentNode.parentNode.previousSibling.firstChild.childNodes[1].innerHTML;
    let cinemaphone = e.parentNode.parentNode.parentNode.previousSibling.childNodes[1].childNodes[0].innerHTML;
    let cinemaprice = e.nextSibling.innerHTML.substr(6,7);
    this.setState({chosedtime:e.innerHTML,price:cinemaprice,adress:cinemadress,phone:cinemaphone,name:cinemaname})
    e.classList.add('choosed-show');
    setTimeout(()=>{
       e.classList.add('choosed');
     },4)
   let selecttime = document.getElementById('select-time');
   let scrollbar = document.getElementById('scrollbar');
   setTimeout(()=>{
    selecttime.style.margin = '-100vh 0px 0px';
    scrollbar.style.display = "none";
   },800)
   setTimeout(()=>{
    this.setState({component:4});
   },1900)
  } 

  redir() {
    this.setState({opacity:{
      opacity:'1'
    }})
  }
  

  render() {
    if (window.innerWidth < 1120) {
      return <Silencer />
    }
    const {chosedfilm, currentBg, price, chosedtime, phone, adress, name, component, opacity} = this.state;
    return (

    <div className="wrapper" id="wrapper"> 

    <Router history={history}>
    <div>

      <Head />
      <Background currentBg={currentBg}/>
      <Lines namefilm={chosedfilm} />
      <Ticketwrap 
      namefilm={chosedfilm}
      name={name} 
      price={price} 
      chosedtime={chosedtime} 
      phone={phone} 
      adress={adress}
      opacity={opacity} />
      <Route exact path='/' render={(props) => (
        <Bookticket handleBg={this.handleStateBg.bind(this)} />
      )}/>
      <Route  path='/choosemovie' render={(props) => (
        <Choose chosename={this.chosename} changeBgToFirst={this.handleStateBgToFirst} />
       
      )}/>
      <Route path='/selecttime' render={(props) => (
        <Selecttime choseTime={this.choseTime} component={component} />
       
      )}/>
      <Route path='/selectseat' render={(props) => (
        <Selectseat choseTime={this.choseTime} redir={this.redir.bind(this)} />
       
      )}/>
      <Route path='/printticket' render={(props) => (
        <Printticket  />
       
      )}/>


    </div>
      

    </Router> 
      
    </div>);
  }
}




export default App;