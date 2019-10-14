import React, { Component } from "react";
import "./App.css";
import logo from './images/ironhack-logo.svg';

class Navigation extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Margin">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Navigation;