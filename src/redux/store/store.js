import { createStore, combineReducers } from "redux";
import SearchReducer from "../reducer/SearchReducer";

const rootReducer = combineReducers({
    getMovies: SearchReducer
})

const store = createStore(rootReducer);

// store.subscribe(() => {
//     console.log("dispatched: ", store.getState());
// })

const stateMapper = (state) => state;

export {store, stateMapper}
