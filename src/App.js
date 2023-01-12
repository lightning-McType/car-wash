import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddBill from "./components/AddBill";
import ShowBill from "./components/ShowBill";
import ShowChart from "./components/ShowChart";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import EditBill from "./components/EditBill";
import MinBills from "./components/MinBills";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Billing app</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Add a bill</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/showbills">Show bills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/showchart">Show time-series chart</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/minbills">Pay minimum bills</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<AddBill />} />
        <Route path="/showbills" element={<ShowBill />} />
        <Route path="/showchart" element={<ShowChart />} />
        <Route path="/edit/:id" element={<EditBill />} />
        <Route path="/minbills" element={<MinBills />} />
      </Routes>
    </>
  );
}

export default App;
