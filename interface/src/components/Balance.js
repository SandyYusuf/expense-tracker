import React,{useState, useEffect} from "react";
import axios from "axios"

const Balance = () => {
  const [sums, setSums] = useState([])

  const getSums = async () => {
    try {
      const sums = await axios({
        method: "get",
        url: "http://localhost:3000/transactions/sum",
      });
   
      setSums(sums.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getSums();
  }, []);

  return (
    <div className="container">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>
                <h2>Balance</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <td>
            Rp. {sums}
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
