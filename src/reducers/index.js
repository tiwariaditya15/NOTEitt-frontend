import { combineReducers } from "redux";
import notes from "./notes";
import curId from "./notesId";
export const reducers =  combineReducers({
    notes,
    curId
});