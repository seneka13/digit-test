import {
  GET_WEATHER_DATA_FAILED,
  GET_WEATHER_DATA_LOADING,
  GET_WEATHER_DATA_SUCCESS,
} from "./constants";

export const getWeatherData = (cityName) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_DATA_LOADING });
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bad46dfee1ae1125ec4faf31e63449de`
    );
    const data = await response.json();
    dispatch({ type: GET_WEATHER_DATA_SUCCESS, data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_DATA_FAILED, error });
  }
};
