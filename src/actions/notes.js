import * as api from "../api/index";
import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/notes";

export const getNotes = () => async (dispatch) => {
        try {
            const { data } = await api.getNotes();
            // console.log(">>returned posts", data);
            dispatch({ type: FETCH_ALL, payload: data});
        } catch (error) {
            console.log(error);
        }
};


export const createNote = (note) => async (dispatch) => {
    try {
            const { data } = await api.createNote(note); 
            console.log(">>returned note", data);
            dispatch({type: CREATE, payload: data});       
    } catch (error) {
            console.log(error);
    }
};

export const deleteNote = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteNote(id);
        dispatch({ type: DELETE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const editNote = (id, note) => async (dispatch) => {
    try {
        // console.log(">>editNote in actions");
        const { data } = await api.editNote(id, note);
        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};
