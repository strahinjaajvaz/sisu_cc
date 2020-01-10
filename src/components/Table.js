import React from "react";
import styled from "styled-components";

function Table({ cars }) {
  return (
    <StyledTable>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Price</th>
        <th>Body type</th>
      </tr>
      {cars.map(({ carId, make, model, price, bodyType }) => (
        <tr key={carId}>
          <td>{make}</td>
          <td>{model}</td>
          <td>${price}</td>
          <td>{bodyType}</td>
        </tr>
      ))}
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 2.4rem;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  tr,
  td {
    width: 25%;
  }
`;

export default Table;
