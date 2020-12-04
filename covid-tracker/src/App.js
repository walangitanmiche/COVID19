import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Global, Indonesia, Provinsi} from "./pages";



const App = () => {
    return (
        <Router>
          
            <div>
                <nav>
                    <ul>
                        <h1 className="center">Covid Tracker</h1>
                        <Link to="/Global" className="center">Global</Link>
                        <Link to="/Indonesia" className="center">Indonesia</Link>
                        <Link to="/Provinsi" className="center">Per Provinsi</Link>
                    </ul>
                </nav>
            <Switch>
                <Route path="/global">
                    <Global/>
                </Route>
                <Route path="/indonesia">
                    <Indonesia/>
                </Route>
                <Route path="/provinsi">
                    <Provinsi/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
};

export default App;