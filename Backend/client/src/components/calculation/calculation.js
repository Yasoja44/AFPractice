import React, { Component } from 'react';
import axios from 'axios';


const initialState = {
    categoryId: '',
    vehicleId: '',
    duration: 0,
    total:0
}


class Calculation extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {

    //this.setState({categoryId:this.props.location.calProps.categoryID});
    //this.setState({vehicleId:this.props.location.calProps.vehicleID});

        this.setState({categoryId:this.props.location.calProps.categoryID.toString()});
        this.setState({vehicleId:this.props.location.calProps.vehicleID.toString()});


    //     axios.get(`http://localhost:9099/vehicle/amount/${this.props.match.params.id}/${this.props.match.params.vehiId}`)
    //         .then(response => {
    //             // this.setState({ subjects: response.data.data });
    //             this.setState({ vehicles: response.data.data.vehicles });
    //             console.log(this.state.vehicles);
    //         })
    //         .catch(error => {
    //             alert(error.message)
           // })




    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let request = {
                cId:this.state.categoryId.toString(),
                vId:this.state.vehicleId.toString(),
                durat:this.state.duration

        }
        console.log(this.state.categoryId);
        console.log(this.state.vehicleId);
        console.log(this.state.duration);


         axios.post('http://localhost:9099/calculation/amount',request)
                .then(response => {
                    // this.setState({ subjects: response.data.data });
                    this.setState({ total: response.data.data });
                    alert("Total: " + this.state.total);
                })
                .catch(error => {
                    alert(error.message);
                })
    }



    render() {

        return (

            <div>
                <div className="container">
                    <h1>Booking:</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                id="duration"
                                name="duration"
                                value={this.state.duration}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </div>


                {/*<div className="container">*/}

                {/*    <div className="card mb-3">*/}
                {/*        <div className="p-3">*/}
                {/*            <h5>Amount: {this.state.total}</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

        )
    }

}


export default Calculation;

