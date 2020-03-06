import React from "react";
import { PersonList } from "../../sw-components/item-lists";
import Row from "../../row";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history }) => {
  return (
    <Row
      left={
        <PersonList
          onItemSelected={id => {
            history.push(`/people/${id}`);
          }}
        />
      }
    />
  );
};

export default withRouter(PeoplePage);
