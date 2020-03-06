import React from "react";
import { PlanetList } from "../../sw-components/item-lists";
import Row from "../../row";
import { withRouter } from "react-router-dom";

const PlanetsPage = ({ history }) => {
  return (
    <Row
      left={
        <PlanetList
          onItemSelected={id => {
            history.push(`/planets/${id}`);
          }}
        />
      }
    />
  );
};

export default withRouter(PlanetsPage);
