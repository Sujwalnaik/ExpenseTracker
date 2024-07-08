import { PieChart, Pie, Cell, Legend } from "recharts";
import { DataContext } from "../contextapi/useContext";
import { useContext } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MyPieChart = () => {
  const data = useContext(DataContext);

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx={150}
        cy={150}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        align="center"
        verticalAlign="bottom"
        layout="horizontal"
        wrapperStyle={{
          paddingBottom: "17px",
          marginLeft: "35px",
        }}
        payload={data.map((entry, index) => ({
          value: entry.name,
          type: "square",
          color: COLORS[index % COLORS.length],
        }))}
      />
    </PieChart>
  );
};

export default MyPieChart;
