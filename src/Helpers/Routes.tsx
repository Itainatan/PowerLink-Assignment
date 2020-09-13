// Imports
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import TeamsPage from "../Components/Teams/TeamsPage"
import TeamPage from "../Components/Team/TeamPage"


//Const - return the routes for app
export const Routes = () => {


    // Rendring
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/teams" />} />
                <Route exact path="/teams" component={TeamsPage} />
                <Route exact path="/teams/:id" component={TeamPage} />
            </Switch>
        </Router>
    );
};
