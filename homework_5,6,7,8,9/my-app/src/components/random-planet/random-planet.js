import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorComponent from "../error-component";

import { withService } from "../../hocs/withService";

import "./random-planet.css";

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    const { getPlanet } = this.props.swapiService;
    getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(e => this.setState({ error: true }));
  };

  render() {
    const { planet, loading, error } = this.state;
    const spinner = loading && !error ? <Spinner /> : null;
    const content = !loading && !error ? <PlanetView planet={planet} /> : null;
    const err = error ? <ErrorComponent /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {err}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withService(RandomPlanet);
