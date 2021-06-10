import './App.css';
import React from "react";
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateVehicle from './components/createVehicle/createVehicle';
import CreateCategory from './components/createCategory/createCategory';
import Categories from './components/categories/categories';
import Vehicles from './components/categories/vehicles';
import Calculation from './components/calculation/calculation';

function App() {
    return (
        <div>
            <Router>
                <NavBar/>
                <section>
                    <Switch>
                        <Route path="/cal" component={Calculation}  />
                        <Route path="/create-vehicle" component={CreateVehicle} />
                        <Route path="/create-category" component={CreateCategory} />
                        <Route path="/:id" component={Vehicles} />
                        <Route path="/" component={Categories}  />
                    </Switch>
                </section>
            </Router>
        </div>
    );
}

export default App;
