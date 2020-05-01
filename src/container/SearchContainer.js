import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store/store";
import * as actionType from "../redux/actions/actions";
import SearchBox from "../components/SearchBox";
import MovieList from "../components/MovieList";
function SearchContainer(props) {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  useEffect(() => {
    props.dispatch({
      type: actionType.SEARCH_MOVIES,
      query: query,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };
  const handleClick = () => {
    props.dispatch({
      type: actionType.SEARCH_MOVIES,
      query: query,
    });
  };
  const handleSortAsc = () => {
    props.dispatch({
      type: actionType.SORT_ASC,
    });
    setSortAsc(false);
  };
  const handleSortDsc = () => {
    props.dispatch({
      type: actionType.SORT_DSC,
    });
    setSortAsc(true);
  };
  const sortDateAsc = () => {
    props.dispatch({
      type: actionType.SORT_DATE_ASC,
    });
    setSortAsc(false);
  };
  const sortDateDsc = () => {
    props.dispatch({
      type: actionType.SORT_DATE_DSC,
    });
    setSortAsc(true);
  };
  const sortIDAsc = () => {
    props.dispatch({
      type: actionType.SORT_ID_ASC,
    })
    setSortAsc(false)
  }
  const sortIDDsc = () => {
    props.dispatch({
      type: actionType.SORT_ID_DSC
    })
    setSortAsc(true)
  }
  return (
    <>
      <SearchBox
        query={query}
        onChange={handleSearch}
        onClick={handleClick}
      ></SearchBox>
      <MovieList
        handleSort={sortAsc ? handleSortAsc : handleSortDsc}
        handleSortDate={sortAsc ? sortDateAsc : sortDateDsc}
        handleSortID = {sortAsc ? sortIDAsc: sortIDDsc}
      ></MovieList>
    </>
  );
}

export default connect(stateMapper)(SearchContainer);
