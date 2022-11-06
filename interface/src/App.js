import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Balance from "./components/Balance";
import History from "./components/History";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense Tracker</h3>
        <h4>Track Your Spendings and Savings Here</h4>
      </header>

      <Balance />

      <div className="container">
        <div className="row">
          <History />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
