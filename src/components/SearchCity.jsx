import React from "react";
import { Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../store/action";

const { Search } = Input;

export const SearchCity = () => {
  const dispatch = useDispatch();
  const getData = (cityName) => dispatch(getWeatherData(cityName));
  const onSearch = (value) => {
    getData(value);
  };
  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
};


