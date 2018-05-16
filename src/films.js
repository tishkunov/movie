import React, { Component } from 'react';
import './App.css';
import Filmwrap from './filmwrap';
import { Redirect, Link } from 'react-router-dom';

class Films extends Component {
	constructor(props) {
		super(props);
		this.state = {
      films: [],
      filmstart: [],
      currentpage:this.props.td,
      pages:this.props.pages,
      component:0,
      styles:{
        
      },
      
    }
	}

  componentWillReceiveProps() {
  
      setTimeout(()=> {
        if (this.props.kedd == false) {
      const positionEl = [35,210,385,560, 735, 910];
      const films = document.getElementsByClassName('film-wrap');
      for (let i = 0; i < films.length; i++) {
          const films = document.getElementsByClassName('film-wrap');
          films[i].style.left = positionEl[i] + 'px';   
      }
      let arrow = document.getElementById('arrow');
       arrow != null ? arrow.classList.add('act') : false;
       }
    },850)
    
    
  }


  getFillWrap(event) {
    this.props.setSt();
    
    var b = document.createElement('div');
    let wrapper = document.getElementById('wrapper');
    b.classList.add('bubble');
    let pos;
    let e = event.target;
    e.className != "film-wrap" ? pos = e.parentNode.getAttribute('pos') : pos = e.getAttribute('pos');
    b.style.top = (event.clientY - document.documentElement.clientHeight*0.5 - 5) + 'px';
    b.style.left = (event.clientX - wrapper.offsetLeft - pos) + 'px';

    e.className != "film-wrap" ? e.parentNode.appendChild(b) : e.appendChild(b);
   
    let t = 10;
    let end = 0;
    let parseTop = parseInt(b.style.top);
    let parseLeft = parseInt(b.style.left);
    let parseOpacity = parseInt(getComputedStyle(b).opacity);


    let animate = setInterval(() => {
            if (end == 1) {
                b.classList.add('hide');
                  clearInterval(animate);   
              }
            else {
                if (t < 151) {
                  b.style.height = t + 'px'; 
                  b.style.width = t + 'px'; 
                }
                if (t > 151) {
                  b.style.height = t + 'px';   
                  b.style.borderRadius = parseInt(getComputedStyle(b).borderRadius) - 4.5 + '%';
                }
                if (parseInt(b.style.left) < 5) {
                    b.style.left =  '-3px';
                  }
                  else {
                    if (parseInt(b.style.left) > 85 ) {
                      b.style.left =  (parseInt(b.style.left) - (parseLeft/44)) + 'px';
                    }
                    else {
                      b.style.left =  (parseInt(b.style.left) - 2.5) + 'px';
                    }
                  }  
                  parseInt(b.style.top) < 5 ? b.style.top =  '0px' : b.style.top = (parseInt(b.style.top) - (parseTop/44)) + 'px'; 

                  t >= 220 ? end = 1 : false;
               
                t = t + 5;
              }
            }, 6);

    setTimeout(()=> { 
      this.setState({styles:{left:null}})
      let choosebody = document.getElementById('choose-movie_body');
      let arrow = document.getElementById('arrow');
      choosebody.style.margin = "-100vh 0 0 0";
      arrow.style.transitionDelay  = "0s";
      arrow.style.right = "100vw";
    }
    ,400);  
   setTimeout(()=> {
    this.setState({component:3})
  },1600)
  }
  
	
  render() {
  if (this.state.component == 3) {
    return <Redirect to='/selecttime' />
  }
  if (this.props.carouselstate == 'active') {
    this.animateFilms();
  }
  const {td} = this.props;
    return (
      <div className="films">
        <ul>
        {this.props.films.map((item, index) => {
          if( index >= (td-1)*6 && index < td*6) {
            return <Filmwrap 
            styles={this.state.styles} 
            ticketname={this.props.chosename}
            names={item.name}
            key={(index - (td-1)*6)}
            src={item.image} 
            pos={(index - (td-1)*6)*150 + 35 + 25*index}
            film={(index - (td-1)*6)+1} 
            coord={this.getFillWrap.bind(this)} />;
          }
        })   
        }
        </ul>
    	</div>
      );
  }
}

export default Films;