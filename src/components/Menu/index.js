import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowLeft from '../../assets/arrow-left.svg';

import './styles.css';

export default function Menu(props) {
  const [ invertValue, setInvertValue ] = useState(0);
  const [ display, setDisplay ] = useState(0);

  useEffect(() => {
    props.white ? setInvertValue(1) : setInvertValue(0);
    props.displayNone ? setDisplay("none") : setDisplay("");
  }, []);

  return (
    <div id="mainMenu">
      <Link to={props.href} style={{ display }}>
        <img src={ArrowLeft} alt="Back" style={{ filter: `invert(${invertValue})` }} />
      </Link>
    </div>
  );
}
