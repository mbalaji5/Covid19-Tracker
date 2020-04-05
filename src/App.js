import React from "react";

import "./App.css";
import "./style.scss";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
