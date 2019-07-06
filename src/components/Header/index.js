import React, { Component } from 'react';
import {KeyboardArrowLeft} from 'styled-icons/material/KeyboardArrowLeft';
import {Home} from 'styled-icons/material/Home';

// Style
import './styles.css';

/* Config */
import envConfig from '../../envConfig.js';

export default class Header extends Component{

    componentDidMount(){
        document.querySelector(".returnButton").onclick = () => {
            window.history.back();
        }
    }

    render(){
        return(
            <header>
                <a href="#!" className="returnButton">
                    <KeyboardArrowLeft className="icon" />
                </a>
                <span>Pokédex</span>
                <a href={`${envConfig.serverPath}`}>
                    <Home className="icon" />
                </a>
            </header>
        );
    }
}