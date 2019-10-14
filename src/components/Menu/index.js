import React from 'react';

import ArrowLeft from '../../assets/arrow-left.svg';

import './styles.css';

export default function Menu(props) {
  return (
    <div id="mainMenu">
      <a href={props.href}>
        <img src={ArrowLeft} alt="Back"/>
      </a>
    </div>
  );
}
