import { SETCURRENTID, REMOVECURRENTID } from "../constants/notes";

export default (id = '', action) => {
    switch(action.type){
        case SETCURRENTID:
            return action.payload;
        case REMOVECURRENTID:
            return '';
        default:
            return '';
    }
};