import ItemList from "../item-list";
import { withData } from "../../hocs/withData";
import { withChildFunction } from "../../hocs/withChildFunction";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderGender = item => `${item.name} | ${item.gender}`;
const renderPeriod = item => `${item.name} | ${item.rotationPeriod}`;
const renderModel = item => `${item.name} | ${item.model}`;

const PersonList = withData(
  withChildFunction(ItemList, renderGender),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(ItemList, renderPeriod),
  getAllPlanets
);
const StarshipList = withData(
  withChildFunction(ItemList, renderModel),
  getAllStarships
);
export { PersonList, PlanetList, StarshipList };
