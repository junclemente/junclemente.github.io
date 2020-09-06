import React from "react";
import cx from "classnames";

const SpaceBetween = ({ children, spacing }) => {
  const childCount = React.Children.count(children);
  return (
    <React.Fragment>
      {React.Children.map(
        children,
        (child, i) =>
          child &&
          React.cloneElement(child, {
            className: cx(child.props.className, {
              [spacing]: i !== childCount - 1
            })
          })
      )}
    </React.Fragment>
  );
};

export default SpaceBetween;
