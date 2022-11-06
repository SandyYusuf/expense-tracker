import React from "react";

const Form=()=> {
  return (
    <div className="col-6 shadow p-3 mb-5 bg-body rounded">
      <div className="col-md-6 mx-auto">
      <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Date
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Insert Date"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Details
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div>
        <label for="Transaction Type" class="form-label">
          Transaction Types
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>--</option>
          <option value="1">Income</option>
          <option value="2">Expense</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Amounts
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Normal Number for income, add (-) infront of number for Expense"
        />
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </div>
      </div>  
    </div>
    
  );
}

export default Form