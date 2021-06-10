import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:9099/category/${this.props.match.params.id}`)
    .then(response => {
      // this.setState({ subjects: response.data.data });
        this.setState({ vehicles: response.data.data.vehicles });
        console.log(this.state.vehicles);
    })
    .catch(error => {
      alert(error.message)
    })


  }


    //navigateFormPage(e, vehicleId) {

        // let request = {
        //     params: {
        //         categoryId: this.props.match.params.id,
        //         vehicleId: vehicleId
        //     }
        // }
        // window.location = `/form`


    // }

  render() {

    return (
        <div className="container">
          <h1>Category Vehicles</h1>
          {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index) => (
              <div key={index} className="card mb-3" >
                <div className="p-3" /*onClick={e => this.navigateFormPage(e, item._id)}*/ >
                  <h4>Vehicle Name: {item.name}</h4>
                  <h5>Code: {item.code}</h5>
                    <h5>Model: {item.model}</h5>
                    <h5>Type: {item.type}</h5>
                  <h5>Amount: {item.amount}</h5>
                    <Link to = {{
                        pathname:'/cal',
                        calProps:{
                            categoryID: this.props.match.params.id,
                            vehicleID: item._id
                        }
                    }}>Choose</Link>
                    {/*<Link to="/cal" params={{ catId: this.props.match.params.id, vehiId:item._id}} className="btn btn-primary">choose</Link>*/}
                    {/*<button onClick={<Redirect to={{*/}
                    {/*    pathname: "/cal",*/}
                    {/*    state: { categoryID: this.props.match.params.id,*/}
                    {/*        vehicleID: item._id }*/}
                    {/*}}/>}>choose</button>*/}
                </div>
              </div>
          ))}
        </div>
    )
  }


}
//


export default Vehicles;