import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withService } from "../../hocs/withService";

const starshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record label="Name" field="name" />
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Speed" field="speed" />
    </ItemDetails>
  );
};

const StarshipDetails = withService(starshipDetails);

export { StarshipDetails };
