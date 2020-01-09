import React, { useMemo, useState, useCallback } from "react";

function App({ cars }) {
  const CAR_MAKES = useMemo(
    () => Array.from(new Set(cars.map(car => car.make))).sort(),
    []
  );
  const [model, setModel] = useState("");
  const [orderBy, setOrderBy] = useState("");

  console.log(CAR_MAKES);

  return <div>Test</div>;
}

export default App;
