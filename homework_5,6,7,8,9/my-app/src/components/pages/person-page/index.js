import React from "react";
import { PersonDetails } from "../../sw-components/person-details";
import { withRouter } from "react-router-dom";

const PersonPage = ({ match }) => {
  const { id } = match.params;
  return <PersonDetails itemId={Number(id)} />;
};

export default withRouter(PersonPage);
