import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    item: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.props.getData(itemId).then(item => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    const { getImageUrl, children } = this.props;
    if (!item) {
      return <span>Select an item from a list</span>;
    }

    return (
      <div className="item-details card">
        <img className="item-image" src={getImageUrl(item)} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ItemDetails.defaultProps = {
  itemId: 15
};

ItemDetails.propTypes = {
  itemId: PropTypes.number
};
