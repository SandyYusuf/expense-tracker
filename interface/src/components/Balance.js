import React from "react";

const Balance=()=> {
  return (
    <div className="container">
      <div className ="shadow p-3 mb-5 bg-body rounded">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><h2>Balance</h2></th>
            </tr>
          </thead>
          <tbody>
            <td><h3>Rp. 4.000.000</h3></td>
          </tbody>
        </table>

        {/* <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Income</th>
              <th>Expense</th>
            </tr>
          </thead>
        </table> */}
      </div>
    </div>
  );
}

export default Balance