import React from "react";

const History = () => {
  return (
    <div className="col-6 shadow p-3 mb-5 bg-body rounded">
      <div className="col-md-12 mx-auto">
        <div>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Details</th>
                <th>Type</th>
                <th>Amounts</th>
              </tr>
            </thead>
            <tbody>
              <td>23 jan 2023</td>
              <td>gaji</td>
              <td>Income</td>
              <td>Rp. 4.000.000</td>
            </tbody>
          </table>
        </div>
      </div> 
    </div>
  );
};

export default History;
