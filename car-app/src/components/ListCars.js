import React, { Component } from 'react';
import { cars } from './cars.json';
import Car from './Car.js';
import { connect } from 'react-redux';
import buy from '../redux/actions/buy';

class ListCars extends Component {
    constructor() {
        super();

        // this.state= {
        //     cars 
        // }
    }
    
    handleBuy = (id) => {
        this.props.buy(id);
    }

    render() {
        const { state } = this.props;
        console.log(state);
        const list = state.cars.map((car, i) => {
            return(
                <div className="col-md-4" key={i}>
                    <Car 
                        handleBuy={ this.handleBuy }
                        car= { car }
                    />
                </div>
            )
        })
        
        return(
            <>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Cars</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                { list }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

const mapDispatchToProps = {
    buy,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCars);