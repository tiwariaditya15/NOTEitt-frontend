import { SETCURRENTID, REMOVECURRENTID } from "../constants/notes";

export const setCurrentId = (id) => async (dispatch) => {
    try {
        dispatch({ type: SETCURRENTID, payload: id});
    } catch (error) {
        console.log(error);
    }
};

export const removeCurrentId = () => async (dispatch) => {
    try {
        dispatch({ type: REMOVECURRENTID, payload: ''});
    } catch (error) {
        console.log(error);
    }
};