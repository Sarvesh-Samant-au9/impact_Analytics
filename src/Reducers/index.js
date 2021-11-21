import { combineReducers } from "redux";
import candidates from "./detailsReducer";
const rootReducer = combineReducers({
  candidates,
});

export default rootReducer;
