import React, { Component } from "react";

// Components
import CarInfo from './CarInfo';
import CarActions from './CarActions';

class Car extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    render() {
        const style = {
            color: "green"
        }
        return(
            <div className="card">
                <div className="card-header">
                    <p style={style}><h3>Car Information</h3></p>
                </div>
                <div className="card-body">
                    <CarInfo 
                        model={ this.props.model } 
                        marca={ this.props.marca } 
                        color={ this.props.color } 
                        patente={ this.props.patente } 
                    />
                    <CarActions />
                </div>
            </div>
        )
    }
}

export default Car;