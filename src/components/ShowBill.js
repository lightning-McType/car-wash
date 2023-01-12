import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/billSlice";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ShowBill() {
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("");
  const totalAmount = bills.reduce((acc, bill) => acc + bill.amount, 0);
  return (
    <>
      <div className="bills-heading">
        <h1>Bills</h1>
        <h2>Total bill amount: ${totalAmount}</h2>
        <select
          name="category"
          className="showbills-category-dropdown"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="" label="All bills" />
          <option value="Utility" label="Utility" />
          <option value="Shopping" label="Shopping" />
          <option value="Food & Dining" label="Food & Dining" />
          <option value="Personal Care" label="Personal Care" />
          <option value="Education" label="Education" />
          <option value="Travel" label="Travel" />
          <option value="Others" label="Others" />
        </select>
      </div>
      {bills.length > 0 ? (
        <Table className="bills-table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categoryFilter
              ? bills
                  .filter((bill) => bill.category === categoryFilter)
                  .map((bill) => (
                    <tr key={bill.id}>
                      <td>{bill.id}</td>
                      <td>{bill.description}</td>
                      <td>{bill.date}</td>
                      <td>{bill.category}</td>
                      <td>{bill.amount}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => navigate(`/edit/${bill.id}`)}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => dispatch(remove(bill.id))}
                          variant="primary"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
              : bills.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.id}</td>
                    <td>{bill.description}</td>
                    <td>{bill.date}</td>
                    <td>{bill.category}</td>
                    <td>{bill.amount}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edit/${bill.id}`)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        onClick={() => dispatch(remove(bill.id))}
                        variant="primary"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default ShowBill;
