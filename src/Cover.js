import React, { Component } from "react";
import "./App.css";

class Cover extends Component {
    render() {
        return (
            <div className="Cover">
                <div className="Margin">
                    <h1>Say hello to ReactJS</h1>
                    <h2>You will learn a Frontend framework from scratch, to become an Ninja Developer.</h2>
                    <button className="CoverBtn">Awesome!</button>
                </div>
            </div>
        )
    }
}

export default Cover;