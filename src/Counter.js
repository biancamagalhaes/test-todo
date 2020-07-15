import React, { Component } from "react";

function App(props) {
  return (
    <div className="App">
      <h1>Você tem {props.count * 2} counters</h1>
    </div>
  );
}

export default App;
