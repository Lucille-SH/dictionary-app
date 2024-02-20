import React from "react";
import logo from "./logo192.png";
import "bootstrap/dist/css/bootstrap.css";

import Dictionary from "./Dictionary";

import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <Dictionary />
    </div>
  );
}
