import React, { Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    categoryName: '',
    description: '',
    categoryAmount: 0 ,
    vehicles: [],
    options: [],
    selectedVehicles: []
}

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onVehicleSelect = this.onVehicleSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:9099/vehicle/')
            .then(response => {
                this.setState({ vehicles: response.data.data }, () => {
                    let data = [];
                    this.state.vehicles.map((item, index) => {
                        let vehicle = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(vehicle)
                    });
                    this.setState({ options: data });
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onVehicleSelect(e) {
        this.setState({ selectedVehicles: e ? e.map(item => item.value) : [] });
    }

    onSubmit(e) {
        e.preventDefault();
        let category = {
            name: this.state.categoryName,
            description: this.state.description,
            amount: this.state.categoryAmount,
            vehicles: this.state.selectedVehicles
        };
        console.log('DATA TO SEND', category)
        axios.post('http://localhost:9099/category/create', category)
            .then(response => {
                alert('Course Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Create Course</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label">Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            name="categoryName"
                            value={this.state.categoryName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryAmount" className="form-label">Category Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            id="categoryAmount"
                            name="categoryAmount"
                            value={this.state.categoryAmount}
                            onChange={this.onChange}
                        />
                    </div>
                    <Select
                        options={this.state.options}
                        onChange={this.onVehicleSelect}
                        className="basic-multi-select"
                        isMulti
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCategory;