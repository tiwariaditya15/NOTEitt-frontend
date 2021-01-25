import axios from "axios";
const URL = "https://noteitt.herokuapp.com/notes";

export const getNotes = () => axios.get(URL);
export const createNote = (note) => axios.post(URL, { note });
export const editNote = (id, note) => axios.patch(`${URL}/${id}`, { note });
export const deleteNote = (id) => axios.delete(`${URL}/${id}`);