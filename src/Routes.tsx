// Imports
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Teams from "./Components/Teams"
import Team from "./Components/Team"


export const Routes = () => {


    // Rendring
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/teams" />} />
                <Route exact path="/teams" component={Teams} />
                <Route exact path="/teams/:id" component={Team} />
            </Switch>
        </Router>
    );
};
