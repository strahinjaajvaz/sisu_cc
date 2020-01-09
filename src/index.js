import React from "react";
import ReactDOM from "react-dom";

import cars from "./cars.json";

import App from "./App";

ReactDOM.render(<App cars={cars} />, document.getElementById("root"));
