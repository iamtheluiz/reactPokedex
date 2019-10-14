import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import pokedexIcon from '../../assets/pokeball.jpg';

export default function IndexItem(props) {
  return(
    <Link to={props.href} className="IndexItem" style={{backgroundColor: props.color}}>
      <strong>{props.title}</strong>
      <img src={pokedexIcon} alt="Pokedex Icon"/>
    </Link>
  )
}