import React from "react";
import ReactDOM from "react-dom";

const App = (): JSX.Element => {
  return <h1>Hello</h1>;
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

export default App;
