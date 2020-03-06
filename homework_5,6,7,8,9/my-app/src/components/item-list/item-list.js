import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item-list.css";

class ItemList extends Component {
  renderItems(arr) {
    return arr.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {this.props.children(item)};
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;

    const items = this.renderItems(data);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
