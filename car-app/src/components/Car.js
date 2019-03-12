import React, { Component } from "react";

class Car extends Component {
    render() {
        return(
            <div clasName="card">
                <div className="card-header">
                    <h3>Car Information</h3>
                </div>
                <div className="card-body">
                    <p>Model: { this.props.model}</p>
                    <p>Marca: { this.props.marca }</p>
                    <p>Color: { this.props.color }</p>
                    <p>Patente: { this.props.patente }</p>
                </div>
            </div>
        )    
    }
}

export default Car;