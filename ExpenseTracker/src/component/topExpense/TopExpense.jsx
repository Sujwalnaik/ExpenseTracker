import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { useContext } from "react";
import { DataContext } from "../contextapi/useContext";

function TopExpense() {
  const data = useContext(DataContext);
  // const data = [
  //   { name: "Food", value: 400 },
  //   { name: "Entertainment", value: 300 },
  //   { name: "Travel", value: 300 },
  // ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ width: "32%" }}>
      <h1 style={{ color: "white" }}>Top Expense</h1>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: "rgba(255, 255, 255, 1)",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.25)",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   flexDirection: "column",
        }}
      >
        <BarChart
          width={500}
          height={350}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}

export default TopExpense;
