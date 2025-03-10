import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 700 },
  { name: "Apr", value: 300 },
  { name: "May", value: 800 },
  { name: "Jun", value: 400 },
  { name: "Jul", value: 900 },
  { name: "Aug", value: 500 },
  { name: "Sept", value: 600 },
  { name: "Oct", value: 700 },
  { name: "Nov", value: 450 },
  { name: "Dec" },
];

const formatCurrency = (value: any) => `$${value}`;

const HostGraph = () => {
  return (
    <div className="flex flex-col h-[auto] p-4 border border-[#EEEEEE] rounded-[12px]">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="8" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatCurrency} tickCount={9} />
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#235370"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HostGraph;
