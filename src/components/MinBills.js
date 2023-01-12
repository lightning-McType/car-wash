import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Table } from "react-bootstrap";
import { useFormik } from "formik";

function selectBills(budget, bills) {
  bills.sort((a, b) => b.amount - a.amount);

  let selectedBills = [];
  let total = 0;
  for (let i = 0; i < bills.length; i++) {
    if (total + bills[i].amount <= budget) {
      selectedBills.push(bills[i]);
      total += bills[i].amount;
    } else {
      break;
    }
  }
  return selectedBills;
}

function MinBills() {
  let bills = useSelector((state) => state.bills);
  const [budget, setBudget] = useState(0);
  const [minBills, setMinBills] = useState([]);
  const formik = useFormik({
    initialValues: {
      budget: 0,
    },
    onSubmit: (values) => {
      setBudget(values.budget);
    },
  });
  useEffect(() => {
    let billsArr = [...bills];
    billsArr.sort((a, b) => b.amount - a.amount);

    let selectedBills = [];
    let total = 0;
    for (let i = 0; i < billsArr.length; i++) {
      if (total + billsArr[i].amount <= budget) {
        selectedBills.push(billsArr[i]);
        total += billsArr[i].amount;
      } else {
        continue;
      }
    }
    setMinBills(selectedBills);
  }, [budget]);
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter you monthly budget</Form.Label>
          <Form.Control
            name="budget"
            type="number"
            value={formik.values.budget}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {minBills.length > 0 ? (
        <Table className="bills-table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {minBills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.id}</td>
                <td>{bill.description}</td>
                <td>{bill.date}</td>
                <td>{bill.category}</td>
                <td>{bill.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
}

export default MinBills;
