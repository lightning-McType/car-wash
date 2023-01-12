import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { add } from "../store/billSlice";

function AddBill() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      category: "",
      date: "",
    },
    onSubmit: (values) => {
      dispatch(add(values));
      alert("Bill added");
    },
  });
  return (
    <div>
      <h1 style={{ marginTop: 20 }}>Add bill details</h1>
      <Form onSubmit={formik.handleSubmit} className="bill-form">
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name="amount"
            type="number"
            placeholder="Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <div className="category-date">
          <div className="category-dropdown">
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <select
                name="category"
                className="category-dropdown"
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <option value="" label="Select a category" />
                <option value="Utility" label="Utility" />
                <option value="Shopping" label="Shopping" />
                <option value="Food & Dining" label="Food & Dining" />
                <option value="Personal Care" label="Personal Care" />
                <option value="Education" label="Education" />
                <option value="Travel" label="Travel" />
                <option value="Others" label="Others" />
              </select>
            </Form.Group>
          </div>
          <div className="date-picker">
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                value={formik.values.date}
                name="date"
                type="date"
                placeholder="Choose date"
                onChange={formik.handleChange}
              />
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddBill;
