import React, { useMemo, useState, useCallback } from "react";
import Card from "./components/Card";

function App({ cars }) {
  const CAR_MAKES = useMemo(
    () => Array.from(new Set(cars.map(car => car.make))).sort(),
    []
  );
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const handleMakeChange = useCallback(({ target: { value } }) =>
    setMake(value)
  );
  const handleModelChange = useCallback(({ target: { value } }) =>
    setModel(value)
  );

  let filteredList;
  if (!make) {
    filteredList = cars;
  } else {
    filteredList = cars.filter(car => car.make === make);
    if (model) {
      filteredList = filteredList.filter(car => car.model === model);
    }
  }

  return (
    <div>
      <select onChange={handleMakeChange}>
        <option value="">Select A Make</option>
        {CAR_MAKES.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select onChange={handleModelChange}>
        <option value="">Select A Model</option>
        {cars
          .filter(car => car.make === make)
          .sort((a, b) => {
            const carA = a.model.toUpperCase();
            const carB = b.model.toUpperCase();
            if (carA < carB) return -1;
            if (carA > carB) return 1;
            return 0;
          })
          .map(car => (
            <option key={car.model} value={car.model}>
              {car.model}
            </option>
          ))}
      </select>
      <div>
        {filteredList.map(car => (
          <Card {...car} key={car.carId} />
        ))}
      </div>
    </div>
  );
}

export default App;
