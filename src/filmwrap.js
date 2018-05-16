import React, { Component } from 'react';
import './App.css';


class Filmwrap extends Component {
	constructor(props) {
		super(props);
    this.chooseFilm = this.chooseFilm.bind(this);
	}

  chooseFilm(event) {
    let e = event.target;
    e.className != "film-wrap" ? e.parentNode.classList.add('choosed') : e.classList.add('choosed');
  }
	
  render() {
    const {names, ticketname, key, film, pos, src, styles} = this.props;
    return (
      <div className="film-wrap" 
      names={names}
      onMouseDown={ticketname}
      key={key}
      film={film}
      pos={pos}
      onClick={this.chooseFilm} style={styles}>
        <img src={src} onClick={this.props.coord} alt="film cover" />
      </div>
        );
  }
}

export default Filmwrap;