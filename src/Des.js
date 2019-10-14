import React, { Component } from "react";
import "./App.css";
import declare from "./images/icon1.png"
import comp from "./images/icon2.png"
import single from "./images/icon3.png"
import stat from "./images/icon4.png"


class Description extends Component {
    render() {
        const information = [
            {
                image: declare,
                title: "Declaration",
                description: "React makes it painless to create interactive UIs."
            },
            {
                image: comp,
                title: "Components",
                description: "Build encapsulated components that manage their state."
            },
            {
                image: single,
                title: "Single-Way",
                description: "A set of immutable values are passed to the component's"
            },
            {
                image: stat,
                title: "JSX",
                description: "Statically-typed, designed to run on modern browsers."
            }
        ]

        function des(prop) {
            return (information.map(des => {
                return (
                    <div className="DesBox">
                        <img src={des.image} />
                        <h3>{des.title}</h3>
                        <p>{des.description}</p>
                    </div>
                )
            }))
        }

        return (
            <div className="Des Margin">
                <div className="DesFlexRow">
                    {des(information)}
                </div>
            </div>

        )
    }
}

export default Description;