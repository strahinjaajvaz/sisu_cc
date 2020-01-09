import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  font-size: 1.6rem;
  & > div {
    & > span {
      margin-right: 20px;
    }
  }
`;

/**
 * No point in using Raect.memo as the list isn't appended to
 * so whenever we have to rerender the list, itll be a different list
 * each time
 */

function Card({ make, model, bodyType, price }) {
  return (
    <StyledCard>
      <h3>{make}</h3>
      <p>{model}</p>
      <div>
        <span>{bodyType}</span>
        <span>${price}</span>
      </div>
    </StyledCard>
  );
}

Card.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  bodyType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Card;
