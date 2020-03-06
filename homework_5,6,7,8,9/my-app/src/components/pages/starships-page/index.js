import React from "react";
import { StarshipList } from "../../sw-components/item-lists";
import Row from "../../row";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <Row
      left={
        <StarshipList
          onItemSelected={id => {
            history.push(`/starships/${id}`);
          }}
        />
      }
    />
  );
};

export default withRouter(StarshipsPage);
