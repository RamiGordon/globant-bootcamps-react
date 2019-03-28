import  React, { Component } from 'react';

class CarInfo extends Component {
    render() {
        return(
            <>
                <p><mark>Model: { this.props.car.modelo }</mark></p>
                <p><mark>Marca: { this.props.car.marca }</mark></p>
                <p><mark>Color: { this.props.car.color }</mark></p>
                <p><mark>Patente: { this.props.car.patente }</mark></p>
            </>
        )
    }
}

export default CarInfo;