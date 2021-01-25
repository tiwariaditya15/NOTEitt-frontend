import { Card, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { deleteNote } from "../../../actions/notes";
import { setCurrentId } from "../../../actions/noteId";

const Note = ({ note, setEditId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        dispatch(setCurrentId(id));
    };
    
    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };
    
    return(
        <>
           <Card variant="outlined">
               <CardContent>
                   <Typography variant="subtitle1">{ note.note}</Typography>
               </CardContent>
               <CardActions>
                  <IconButton size="small">
                   <EditIcon style={{ color: "#2962ff"}} onClick={() => handleEdit(note._id)} />
                  </IconButton>
                  <IconButton size="small">
                      <DeleteIcon style={{ color: "#2962ff"}} onClick={() => handleDelete(note._id)} />
                  </IconButton>
               </CardActions>
           </Card>
        </>
    );
};

export default Note;