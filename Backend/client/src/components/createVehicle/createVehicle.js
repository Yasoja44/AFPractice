import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
    vehicleName: '',
    code: '',
    model: '',
    type: '',
    vehicleAmount: 0
}
class CreateVehicle extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let vehicle = {
            name: this.state.vehicleName,
            model: this.state.model,
            code:this.state.code,
            type:this.state.type,
            amount: this.state.vehicleAmount
        }
        console.log('DATA TO SEND', vehicle);
        axios.post('http://localhost:9099/vehicle/create', vehicle)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Create Vehicle</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="vehicleName" className="form-label">Vehicle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="vehicleName"
                            name="vehicleName"
                            value={this.state.vehicleName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="code"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Model</label>
                        <input
                            type="text"
                            className="form-control"
                            id="model"
                            name="model"
                            value={this.state.model}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            name="type"
                            value={this.state.type}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vehicleAmount" className="form-label">Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            id="vehicleAmount"
                            name="vehicleAmount"
                            value={this.state.vehicleAmount}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateVehicle;