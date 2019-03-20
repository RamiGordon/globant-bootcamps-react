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
        console.log(this.state);
        this.props.history.push("./vehicles");
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
                            required
                        />
                    </label>
                    <br/>
                    <label>
                        Money Amount:  
                        <input 
                            type="number" 
                            name="amount" 
                            min="0" 
                            onChange={this.handleInput} 
                            required
                        />
                    </label>
                    <br/>
                    <label>
                        Do you have vehicles?:  
                        yes <input type="radio" name="vehicle" value="yes" onChange={this.handleInput} />
                        no <input type="radio" name="vehicle" value="no" onChange={this.handleInput} />
                    </label>
                    <br/>
                    <input type="submit" value ="Submit" />
                </form>
            </>
        )
    } 
}

export default Home;