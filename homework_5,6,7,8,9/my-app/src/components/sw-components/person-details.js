import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withService } from "../../hocs/withService";

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record label="Name" field="name" />
      <Record label="Gender" field="model" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};

const PersonDetails = withService(personDetails);

export { PersonDetails };
