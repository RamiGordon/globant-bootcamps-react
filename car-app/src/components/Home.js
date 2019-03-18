import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            amount: '',
            vehicle: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('sending');
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>
                        User Name:  
                        <input 
                            type="text" 
                            name="name" 
                            onChange={this.handleInput}
                        />
                    </label>
                    <br/>
                    <label>
                        Money Amount:  
                        <input 
                            type="text" 
                            name="amount"
                            onChange={this.handleInput}
                        />
                    </label>
                    <br/>
                    <label>
                        You have vehicle?  
                        <input 
                        type="text" 
                        name="vehicle"
                        onChange={this.handleInput}
                    />
                    </label>
                    <br/>
                    <input type="submit" value ="Submit" />
                </form>
            </>
        )
    } 
}

export default Home;