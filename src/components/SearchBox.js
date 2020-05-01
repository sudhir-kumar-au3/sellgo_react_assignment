import React from "react";

function SearchBox(props) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            value={props.query}
            onChange={props.onChange}
            className="searchTerm"
            placeholder="Search movies title..."
          />
          <button
            type="submit"
            className="searchButton"
            onClick={props.onClick}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
