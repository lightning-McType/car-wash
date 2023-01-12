import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { edit } from "../store/billSlice";
import { useNavigate } from "react-router-dom";

function EditBill() {
  const navigate = useNavigate();
  const { id } = useParams();
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const bill = bills.find((bill) => Number(bill.id) === Number(id));
  const formik = useFormik({
    initialValues: {
      description: bill.description,
      amount: bill.amount,
      category: bill.category,
      date: bill.date,
    },
    onSubmit: (values) => {
      values = { ...values, id };
      dispatch(edit(values));
      navigate("/showbills");
    },
  });
  return (
    <div>
      <h1 style={{ marginTop: 20 }}>Edit bill</h1>
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
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default EditBill;
