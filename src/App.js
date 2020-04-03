import React from "react";

import "./App.css";
import "./style.scss";
import { Header } from "./component/header/Header";
import { Home } from "./component/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
