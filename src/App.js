import React from "react";
import { Empty, Spin } from "antd";
import { useSelector } from "react-redux";
import { SearchCity } from "./components/SearchCity";
import { WeatherChart } from "./components/WeatherChart";
import "./styles/main.css";

function App() {
  const { data, loading, success } = useSelector((state) => ({
    data: state.data,
    loading: state.getData.loading,
    success: state.getData.success,
  }));
  return (
    <>
      <header className="header">
        <h1>City Weathers</h1>
      </header>
      <div className="layout">
        <SearchCity />
        <hr />
        <div className="chartContainer">
          {loading && <Spin tip="Loading..."></Spin>}
          {data.cod < "400" && success && <WeatherChart />}
          {data.cod > "400" && <Empty />}
        </div>
      </div>
    </>
  );
}

export default App;
