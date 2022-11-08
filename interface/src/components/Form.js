import React, { useState } from "react";

const Form = () => {
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = () => {
    console.log("submit");
    const tempObj = { date, detail, type, amount };
    console.log(tempObj);
  };

  return (
    <div className="col-6 shadow p-3 mb-5 bg-body rounded">
      <div className="col-md-6 mx-auto">
        <div>
          <div>
            <h3> Add Transaction</h3>
          </div>
          <form className="needs-validation">
            <div class="mb-3">
              <label for="Date" class="form-label ">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Insert Date"
              />
            </div>
            <div class="mb-3">
              <label for="Details" class="form-label ">
                Details
              </label>
              <input
                onChange={(e) => setDetail(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Insert Details"
              />
            </div>

            <div>
              <label for="Transaction Type" class="form-label ">
                Transaction Types
              </label>
              <input
                onChange={(e) => setType(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Income/Expense"
              />
            </div>

            <div class="mb-3">
              <label for="amount" class="form-label ">
                Amounts
              </label>
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="email"
                class="form-control"
                id="amount"
                placeholder="Normal Number for income, add (-) infront of number for Expense"
              />
            </div>
          </form>
          <div class="col-12">
            <button
              onClick={() => submitHandler()}
              class="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
