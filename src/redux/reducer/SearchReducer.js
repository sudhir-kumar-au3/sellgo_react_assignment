import { fetchSearchResult } from "../../service/apicall";
import * as actionType from "../actions/actions";
const SearchReducer = (searchResult = [], action) => {
  if (action.type === actionType.SEARCH_MOVIES) {
    fetchSearchResult(action.query);
  }
  if (action.type === actionType.MOVIES_LOADED) {
    searchResult = action.movies;
  }
  if (action.type === actionType.DELETE_MOVIE) {
    searchResult = searchResult.filter((movie) => movie.imdbID !== action.id);
  }
  if (action.type === actionType.SORT_ASC) {
    searchResult =
      searchResult.length > 0
        ? [
            ...searchResult.sort((a, b) =>
              a.Title > b.Title ? 1 : b.Title > a.Title ? -1 : 0
            ),
          ]
        : searchResult;
  }
  if (action.type === actionType.SORT_DSC) {
    searchResult =
      searchResult.length > 0
        ? [
            ...searchResult.sort((a, b) =>
              a.Title < b.Title ? 1 : b.Title < a.Title ? -1 : 0
            ),
          ]
        : searchResult;
  }
  if (action.type === actionType.SORT_DATE_ASC) {
    searchResult =
      searchResult.length > 0
        ? [...searchResult.sort((a, b) => a.Year - b.Year)]
        : searchResult;
  }
  if (action.type === actionType.SORT_DATE_DSC) {
    searchResult =
      searchResult.length > 0
        ? [...searchResult.sort((a, b) => b.Year - a.Year)]
        : searchResult;
  }
  if (action.type === actionType.SORT_ID_ASC) {
    searchResult =
      searchResult.length > 0
        ? [
            ...searchResult.sort((a, b) =>
              a.imdbID > b.imdbID ? 1 : b.imdbID > a.imdbID ? -1 : 0
            ),
          ]
        : searchResult;
  }
  if (action.type === actionType.SORT_ID_DSC) {
    searchResult =
      searchResult.length > 0
        ? [
            ...searchResult.sort((a, b) =>
              a.imdbID < b.imdbID ? 1 : b.imdbID < a.imdbID ? -1 : 0
            ),
          ]
        : searchResult;
  }
  return searchResult;
};
export default SearchReducer;
