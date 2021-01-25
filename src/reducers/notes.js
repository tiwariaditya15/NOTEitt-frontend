import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/notes";

export default (notes = [], action) => {
    switch(action.type){
        case DELETE:
            return notes.filter(note => note._id !== action.payload._id);
        case FETCH_ALL: 
            return action.payload;
        case CREATE:
            return [...notes, action.payload];
        case UPDATE: 
            return notes.map(note => note._id === action.payload._id ? action.payload : note);
        default:
            return notes;
    }
};