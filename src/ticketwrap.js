import React, { Component } from 'react';
import './App.css';

class Ticketwrap extends Component {
	constructor() {
    	super();
      this.state = {
        ticketstyle: {
          right:'-100vh',
          display:'none'
        },
        
      }
      
  	}

   componentWillReceiveProps(){
    setTimeout(()=>{
       if (window.location.pathname == '/selecttime') {
        setTimeout(()=>{
        this.setState({ticketstyle:{
            display:'block'
          }
        })
      },40);
      setTimeout(()=>{
        this.setState({ticketstyle:{
            right:'50px',
            display:'block'
          }
        })
      },100);
      }
    },1700) 
    

   } 

   


  render() {
    
    var ticketinfo = 'ticket-wrap_info';
    var ticketadress = 'ticket-wrap_adress';
    if (this.props.price != '') {
      ticketinfo += ' active';
      ticketadress += ' active';
    }

  	const {name,adress,phone,price,namefilm,chosedtime} = this.props;
    return (<div className="ticket-wrap" id="ticket-wrap" style={this.state.ticketstyle}>
      <div className="ticket-wrap_head">
        <h2>{namefilm}</h2>
      </div>
      <div className={ticketinfo}>
        <div className="ticket-wrap_info_date">
          <h3>DATE</h3>
          <p>21 May</p>
          <span>2018</span>
        </div>
        <div className="ticket-wrap_info_date">
          <h3>TIME</h3>
          <p>{chosedtime}</p>
        </div>
        <div className="ticket-wrap_info_date">
          <h3>PRICE</h3>
          <p>${price}</p>
        </div>
        <div className="code" style={this.props.opacity}>
        <img src="img/code.png" />
        </div>
      </div>
      <div className={ticketadress}>
        <div className="ticket-wrap_adress-name">
          <h3>{name}</h3>
          <p>{adress}</p>
        </div>
        <div className="ticket-wrap_adress-name">
          <p>{phone}</p>
        </div>
      </div>
    	
    	</div>);
  }
}

export default Ticketwrap;