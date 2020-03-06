import React from "react";
import { PlanetDetails } from "../../sw-components/planet-details";
import { withRouter } from "react-router-dom";

const PlanetsPage = ({ match }) => {
  const { id } = match.params;
  return <PlanetDetails itemId={Number(id)} />;
};

export default withRouter(PlanetsPage);
