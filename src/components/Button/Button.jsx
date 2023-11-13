import React, { Component } from "react";

class Button extends Component  {
    render() {
        const { onClick } = this.props;
        return (
            <button onClick={onClick}>Load MORE</button>
        )
    }
}

export default Button;