import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useSelector } from "react-redux";

function ShowChart() {
  const bills = useSelector((state) => state.bills);
  let newBills = [];
  for (let bill of bills) {
    newBills.push({ ...bill, date: new Date(bill.date) });
  }
  newBills.sort((a, b) => a.date - b.date);
  let sortedBills = [];
  for (let bill of newBills) {
    sortedBills.push({ ...bill, date: bill.date.toDateString() });
  }
  return (
    <div>
      <LineChart
        width={1500}
        height={700}
        data={sortedBills}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="amount" stroke="#8884d8" dot={false} />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default ShowChart;
