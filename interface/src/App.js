import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <h4>Track Your Spendings and Savings Here</h4>
      </header>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Balance</th>
          </tr>                   
        </thead>
      </table>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Income</th>
            <th>Expense</th>
          </tr>
        </thead>
      </table>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Details</th>
            <th>Label</th>
            <th>Amounts</th>
          </tr>
        </thead>
      </table>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Date</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Insert Date"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Details</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div>
      <label for="Transaction Type" class="form-label">Transaction Types</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>--</option>
        <option value="1">Income</option>
        <option value="2">Expense</option>        
      </select>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Amounts</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Normal Number for income, add (-) infront of number for Expense"/>
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>

    </div>
  );
}

export default App;
