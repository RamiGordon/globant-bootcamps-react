import  React, { Component } from 'react';

class CarActions extends Component {
    constructor() {
        super();

        this.state = {
            cars: 0
        }
    }
    
    handleButtonBuy = () => {
        let aux = this.state.cars + 1;
        this.setState({cars: aux})
    }

    handleButtonSell = () => {
        let aux = this.state.cars
        if (aux === 0) {
            window.alert('You do not have more stock to sell')
        } else {
            let con = aux -1;
            this.setState({cars: con});
        }
    }

    render() {
        return(
            <>
                <p><mark>You have { this.state.cars } cars</mark></p>
                <button onClick={ this.handleButtonBuy }>buy</button>
                <button onClick={ this.handleButtonSell }>sell</button>
                
            </>
        )
    }
}

export default CarActions;