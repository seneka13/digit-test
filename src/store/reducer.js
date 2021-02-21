import stateCreator from "../services/stateCreator";
import {
  GET_WEATHER_DATA_FAILED,
  GET_WEATHER_DATA_LOADING,
  GET_WEATHER_DATA_SUCCESS,
} from "./constants";

const initialState = {
  getData: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        getData: stateCreator("success"),
      };
    case GET_WEATHER_DATA_LOADING:
      return {
        ...state,
        getData: stateCreator("loading"),
      };
    case GET_WEATHER_DATA_FAILED:
      return {
        ...state,
        getData: stateCreator("failed", action.error),
      };
    default:
      return state;
  }
};

export default reducer;
