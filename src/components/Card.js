import React from "react";
import PropTypes from "prop-types";

/**
 * No point in using Raect.memo as the list isn't appended to
 * so whenever we have to rerender the list, itll be a different list
 * each time
 */

function Card({ make, model, bodyType, price }) {
  return (
    <div>
      <p>{make}</p>
      <p>{model}</p>
      <p>{bodyType}</p>
      <p>{price}</p>
    </div>
  );
}

Card.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  bodyType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Card;
