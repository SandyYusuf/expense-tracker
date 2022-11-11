import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h3>Expense Tracker</h3>
        <h4>Track Your Spendings and Savings Here</h4>
      </header>

      <div className="Body">
        {/* <Balance />
        <Transaction />
        <Form /> */}

        <div className="container px-4 text-center">
          <div className="row gx-4">
            <div className="col">
              <Balance />
              <Transaction />
            </div>
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
