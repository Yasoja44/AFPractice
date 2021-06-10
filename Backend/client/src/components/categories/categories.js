import React, { Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

   componentDidMount() {
    axios.get('http://localhost:9099/category/')
    .then(response => {
      this.setState({ categories: response.data.data });
    })


  }

  navigateVehiclePage(e, categoryId) {
    window.location = `/${categoryId}`
  }

  render() {
    return (
      <div className="container">
        <h1>Categories</h1>
        {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="p-3" onClick={e => this.navigateVehiclePage(e, item._id)}>
              <h4>Category Name: {item.name}</h4>
              <h6>Description: {item.description}</h6>
              <h5>Amount: {item.amount}</h5>

            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Categories;