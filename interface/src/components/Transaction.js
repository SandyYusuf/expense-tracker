import React, {useState} from "react";
import axios from "axios"


const Transaction = () => {
  const [transactions, setTransactions] = useState([])

  const getTransactions = async () => {
    try {
      const transactions = await axios({
        method: "get",
        url: "http://localhost:3000/transactions",
      });
   
      console.log(transactions);
    } catch (err) {
      console.log(err);
    }
  };


  getTransactions()

    return (
    <>
      <div className="col-6 shadow p-3 mb-5 bg-body rounded">
        <div className="col-md-12 mx-auto">
          <div>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Date</th>
                  <th>Details</th>
                  <th>Categories</th>
                  <th>Amounts</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
