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
                        car = { this.props.car }
                    />
                    <CarActions car = { this.props.car }/>
                </div>
            </div>
        )
    }
}

export default Car;