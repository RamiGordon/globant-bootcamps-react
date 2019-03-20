import  React, { Component } from 'react';

class CarInfo extends Component {
    render() {
        return(
            <>
                <p><mark>Model: { this.props.model }</mark></p>
                <p><mark>Marca: { this.props.marca }</mark></p>
                <p><mark>Color: { this.props.color }</mark></p>
                <p><mark>Patente: { this.props.patente }</mark></p>
            </>
        )
    }
}

export default CarInfo;