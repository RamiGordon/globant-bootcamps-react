import  React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import buy from '../redux/actions/buy';
// import store from '../redux/store';



class CarActions extends Component {
    constructor() {
        super();

        this.state = {
            cars: 0
        }
    }
    
    handleButtonBuy = () => {
        let aux = this.state.cars + 1;
        this.setState({cars: aux});
        // console.log(this.props.car.id);
        // this.props.handleBuy(this.props.car.id);
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
        // const { state } = this.props;
        // console.log(state);
        console.log(this.props.car.count);
        return(
            <>
                <p><mark>You have { this.state.cars } cars</mark></p>
                <Button  outline variant="primary" onClick={ this.handleButtonBuy }>buy</Button> 
                <Button  outline variant="danger" onClick={ this.handleButtonSell }>sell</Button>              
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     };
// };

// const mapDispatchToProps = {
//     buy,
// }

// esto es para entender la logica
// const wrapper = connect(mapStateToProps);
// const component = wrapper(CarActions);
// export default component;

export default CarActions;