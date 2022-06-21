import React from "react";
import css from './State.module.css';


class State extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            span: "Hello, guest!",
            buttonTwo: "Log in",
        };
    }
    handleClick() {
        this.setState({
            span: this.state.span === "Welcome back, user!" ? "Hello, guest!" : "Welcome back, user!",
            buttonTwo: this.state.buttonTwo === "Log out" ? "Log in" : "Log out",
        }, () => 
            console.log(this.state.span)
        );

    }


    render() {
        return (
            <div>
                <h1 className ={css.State}>My Gallery</h1>
                <span onClick={() => this.handleClick()} > {this.state.span}</span> 
                <button onClick={() => this.handleClick()} > {this.state.buttonTwo}</button>
            </div>

        )

    }
}

export default State;