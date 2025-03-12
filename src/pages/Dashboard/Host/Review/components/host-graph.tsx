import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatCurrency = (value: any) => `$${value}`;

const HostGraph = ({ graphData }: { graphData: any }) => {
  const graphDataArray = Object.entries(graphData).map(
    ([name, value], index) => {
      if (index <= moment().month()) {
        return { name, value };
      } else {
        return { name };
      }
    }
  );

  return (
    <div className="flex flex-col h-[auto] p-4 border border-[#EEEEEE] rounded-[12px]">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={graphDataArray}
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
