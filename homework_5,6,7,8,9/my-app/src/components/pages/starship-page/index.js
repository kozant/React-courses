import React from "react";
import { StarshipDetails } from "../../sw-components/starship-details";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ match }) => {
  const { id } = match.params;
  return <StarshipDetails itemId={Number(id)} />;
};

export default withRouter(StarshipPage);
