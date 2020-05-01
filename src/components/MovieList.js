import React from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store/store";
import * as actionType from "../redux/actions/actions";
function MovieList(props) {
  return (
    <div className="mt-2">
      <table>
        <thead className="thead-light">
          <tr>
            <th className="cell1">
              Title
              <span>
                <button className="btn" onClick={props.handleSort}>
                  <img
                    src="https://img.icons8.com/material-sharp/20/000000/sort.png"
                    alt="sort-btn"
                  />
                </button>
              </span>
            </th>
            <th className="cell2">
              Year
              <span>
                <button className="btn" onClick={props.handleSortDate}>
                  <img
                    src="https://img.icons8.com/material-sharp/20/000000/sort.png"
                    alt="sort-btn"
                  />
                </button>
              </span>
            </th>
            <th className="cell3">
              imdbID
              <span>
                <button className="btn" onClick={props.handleSortID}>
                  <img
                    src="https://img.icons8.com/material-sharp/20/000000/sort.png"
                    alt="sort-btn"
                  />
                </button>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.getMovies ? (
            props.getMovies.map((data) => {
              return (
                <tr key={data.imdbID}>
                  <td className="cell1">{data.Title}</td>
                  <td className="cell2">{data.Year}</td>
                  <td className="cell3">
                    {data.imdbID.substring(2)}
                    <span>
                      {" "}
                      <button
                        className="btn delete"
                        onClick={() =>
                          props.dispatch({
                            type: actionType.DELETE_MOVIE,
                            id: data.imdbID,
                          })
                        }
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default connect(stateMapper)(MovieList);
