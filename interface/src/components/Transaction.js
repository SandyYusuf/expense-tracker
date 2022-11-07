import React, {useState, useEffect} from "react";
import axios from "axios"


const Transaction = () => {
  const [transactions, setTransactions] = useState([])

  const getTransactions = async () => {
    try {
      const transactions = await axios({
        method: "get",
        url: "http://localhost:3000/transactions",
      });
   
      setTransactions(transactions.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getTransactions();
  }, []);

    return (
    <>
      <div className="col-6 shadow p-3 mb-5 bg-body rounded">
        <div className="col-md-12 mx-auto">
          <div>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  
                  <th>Date</th>
                  <th>Details</th>
                  <th>Categories</th>
                  <th>Amounts</th> 
                </tr>
              </thead>
              <tbody>
              {transactions.map((transaction) => {
            const { date, detail, categories, amount } = transaction;
            return (
              <tr>
                
                <td>{date}</td>
                <td>{detail}</td>
                <td>{categories}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
