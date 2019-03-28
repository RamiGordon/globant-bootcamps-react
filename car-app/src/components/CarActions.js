import  React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import buy from '../redux/actions/buy';
import sell from '../redux/actions/sell';

class CarActions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            car: this.props.car
        }
    }
    
    // handle of button BUY
    handleButtonBuy = () => {
        this.props.buy(this.state.car.id); //DISPACHER BUY
    }

    // handle of button SELL
    handleButtonSell = () => {
        let aux = this.props.car.count
        if (aux === 0) {
            window.alert('You do not have more stock to sell')
        } else {
            let con = aux -1;
            this.props.sell(this.state.car.id); //DISPACHER SELL
        }
    }

    render() {
        return(
            <>
                <p><mark>You have { this.props.car.count } cars</mark></p>
                <Button  outline variant="primary" onClick={ this.handleButtonBuy }>buy</Button> 
                <Button  outline variant="danger" onClick={ this.handleButtonSell }>sell</Button>              
            </>
        )
    }
}


const mapDispatchToProps = {
    buy,
    sell,
}

// esto es para entender la logica
// const wrapper = connect(mapStateToProps);
// const component = wrapper(CarActions);
// export default component;

export default connect(null, mapDispatchToProps)(CarActions);
