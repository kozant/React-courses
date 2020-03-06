import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorComponent from "../components/error-component";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false
    };
    componentDidMount() {
      getData()
        .then(data => {
          this.setState({ data });
        })
        .catch(e => this.setState({ error: true }));
    }
    render() {
      const { data, error } = this.state;
      if (!data && !error) {
        return <Spinner />;
      }
      if (data && !error) {
        return <View {...this.props} data={data} />;
      }
      if (error) {
        return <ErrorComponent />;
      }
    }
  };
};

export { withData };
