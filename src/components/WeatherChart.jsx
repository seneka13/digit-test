import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export const WeatherChart = () => {
  const data = useSelector((state) => state.data);
  const [filterdArr, setFilterdArr] = useState([]);
  useEffect(() => {
    if (data.list?.length > 0) {
      setFilterdArr(
        data.list.map((item) => {
          return {
            temperature: item.main.temp,
            name: item.dt_txt,
          };
        })
      );
    }
    return () => {};
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={filterdArr}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#1890ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};
