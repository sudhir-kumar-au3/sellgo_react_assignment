import { store } from "../redux/store/store";
import Axios from "axios";
import * as actionType from "../redux/actions/actions";
const fetchSearchResult = async (query) => {
  try {
    const response = await Axios.get(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${query}`
    );
    const result = await response.data;
    store.dispatch({
      type: actionType.MOVIES_LOADED,
      movies: result.data,
    });
  } catch (error) {
    return "Something went wrong!";
  }
};

export { fetchSearchResult };
