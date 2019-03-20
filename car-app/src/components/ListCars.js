import React, { Component } from 'react';
import { cars } from './cars.json';
import Car from './Car.js';

class ListCars extends Component {
    constructor() {
        super();

        this.state= {
            cars
        }
    }

    render() {
        const list = this.state.cars.map((car, i) => {
            return(
                <div className="col-md-4" key={i}>
                    <Car 
                        model={ car.modelo } 
                        marca={ car.marca } 
                        color={ car.color } 
                        patente={ car.patente }
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

export default ListCars;