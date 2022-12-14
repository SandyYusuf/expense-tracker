import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [load, setLoad] = useState(2);
  // const [readMore, setReadMore] = useState(false);

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

  const loadData = () => {
    setLoad((prev) => prev + 2);
  };

  const deleteTransaction = async (id) => {
    // console.log(id)
    try {
      const transactions = await axios({
        method: "delete",
        url: `http://localhost:3000/transactions/remove/${id}`,
      });
      setTransactions(transactions.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showLess = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div id="main" className=" shadow p-3 mb-5 bg-body rounded  ">
        <div className="col-md-12 mx-auto ">
          <div>
            <table className="table table-dark table-bordered table-hover table-striped">
              <thead>
                <tr className="table-info">
                  <th>Date</th>
                  <th>Details</th>
                  <th>Amounts</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {transactions.length !== 0 ? (
                  transactions.slice(0, load).map((transaction) => {
                    const { id, date, detail, categories, amount } =
                      transaction;
                    return (
                      <tr>
                        <td>{date}</td>
                        <td>
                          <div className="align-items-center">
                            <div className="">
                              <h5>{detail}</h5>
                              <small className="badge bg-info">
                                {categories}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="align-items-center">
                            <div className="">
                              <h5>Rp. {amount}</h5>
                              <button
                                onClick={() => deleteTransaction(id)}
                                className="btn btn-sm btn-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                        {/* <td></td> */}
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
                    {/* <td></td> */}
                  </tr>
                )}

                {/* <button className="btn" onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "  read more"}
                </button> */}
              </tbody>
            </table>
            <div className="container">
              <div className="row">
                <button
                  onClick={() => showLess()}
                  className="btn btn-sm btn-secondary col-md-4 mx-auto"
                >
                  Show Less
                </button>

                {load < 100 && (
                  <button
                    onClick={loadData}
                    class="btn btn-secondary col-md-4 mx-auto"
                    type="LoadMore"
                  >
                    show more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
