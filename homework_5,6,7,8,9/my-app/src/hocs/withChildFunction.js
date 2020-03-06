import React from "react";

const withChildFunction = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

export { withChildFunction };
