import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: []
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(data => {
      this.setState({ items: data });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <ul className="item-list list-group">
        {items.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
