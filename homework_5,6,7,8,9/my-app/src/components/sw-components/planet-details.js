import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { withService } from "../../hocs/withService";

const planetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record label="Name" field="name" />
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};

const PlanetDetails = withService(planetDetails);

export { PlanetDetails };
