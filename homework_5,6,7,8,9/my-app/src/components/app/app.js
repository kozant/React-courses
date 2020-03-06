import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PeoplePage from "../pages/people-page";
import PersonPage from "../pages/person-page";
import PlanetsPage from "../pages/planets-page";
import PlanetPage from "../pages/planet-page";
import StarshipsPage from "../pages/starships-page";
import StarshipPage from "../pages/starship-page";

import "./app.css";

export default class App extends Component {
  SwapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.SwapiService}>
        <div>
          <Router>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" render={() => <h1>Welcome!</h1>} exact />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/people/:id" component={PersonPage} />
              <Route path="/planets" component={PlanetsPage} exact />
              <Route path="/planets/:id" component={PlanetPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id" component={StarshipPage} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </Router>
        </div>
      </SwapiServiceProvider>
    );
  }
}
