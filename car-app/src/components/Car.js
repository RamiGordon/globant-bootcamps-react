import React, { Component } from "react";

class Car extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handleButton = () => {
        let aux = this.state.count + 1;
        this.setState({count: aux})
    }

    render() {
        return(
            <div clasName="card">
                <div className="card-header">
                    <h3>Car Information</h3>
                </div>
                <div className="card-body">
                    <p>Model: { this.props.model }</p>
                    <p>Marca: { this.props.marca }</p>
                    <p>Color: { this.props.color }</p>
                    <p>Patente: { this.props.patente }</p>
                    <button onClick={ this.handleButton }>buy</button>
                    <p>You have { this.state.count } cars</p>
                </div>
            </div>
        )
    }
}

export default Car;