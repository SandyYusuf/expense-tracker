import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

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

  const deleteTransaction = async (id)=>{
    // console.log(id)
    try{
      const transactions = await axios ({
        method: "delete",
        url: `http://localhost:3000/transactions/remove/${id}`
      })
      setTransactions(transactions.data)
      window.location.reload(false)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <div className="col-6 shadow p-3 mb-5 bg-body rounded ">
        <div className="col-md-12 mx-auto ">
          <div>
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr className="table-info">
                  <th>Date</th>
                  <th>Details</th>
                  <th>Amounts</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length !== 0 ? (
                  transactions.map((transaction) => {
                    const { id, date, detail, categories, amount } = transaction;
                    return (
                      <tr>
                        <td>{date}</td>
                        <td>
                          <div className="align-items-center">
                            <div className="">
                              <h5>{detail}</h5>
                              <small className="badge bg-success">
                                {categories}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>Rp. {amount}</td>
                        <td>
                          <button 
                          onClick={()=>deleteTransaction(id)}
                          className="btn btn-sm btn-danger me-3">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td></td>
                    <td>
                      <Loading />
                    </td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
