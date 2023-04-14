import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PageHeader from "./PageHeader";

const Statistics = () => {
  const marksData = [
    {
      name: "Assignment-1",
      marks: 58,
    },
    {
      name: "Assignment-2",
      marks: 60,
    },
    {
      name: "Assignment-3",
      marks: 60,
    },
    {
      name: "Assignment-4",
      marks: 60,
    },
    {
      name: "Assignment-5",
      marks: 60,
    },
    {
      name: "Assignment-6",
      marks: 60,
    },
    {
      name: "Assignment-7",
      marks: 60,
    },
  ];

  return (
    <div>
      <PageHeader text="Statistics" />
      <ResponsiveContainer width="80%" height={350} className="mx-auto mt-3">
        <AreaChart
          width={500}
          height={200}
          data={marksData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
