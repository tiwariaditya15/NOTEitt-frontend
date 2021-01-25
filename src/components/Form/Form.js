import { useState, useEffect } from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core";
import useStyle from "./styles";
import CheckIcon from "@material-ui/icons/Check";
import CrossIcon from "@material-ui/icons/Cancel";
import { createNote, editNote } from "../../actions/notes";
import { removeCurrentId } from "../../actions/noteId";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ setShowNotification }) => {

    const [note, setNote] = useState('');
    const [curId, setCurId] = useState('');
    const dispatch = useDispatch();
    const editnote = useSelector(state => state.notes.filter(note => note._id === state.curId));
    
    const clear = () => {
        setNote('');
        setCurId('');
    };
 
    // const handleChange = (e) => {
    //     console.log(">>handleChange", note, e.target.value);
    //     setNote(e.target.value);
    // }

    const handleSubmit = (e) => {
        if(curId !== ''){
            dispatch(editNote(curId, note));
            clear();
        }else{
            dispatch(createNote(note));
            setShowNotification(true);
            clear();
        }
    };

    const classes = useStyle();

    useEffect(() => {
        // console.log(">>");
        if(editnote.length === 1) {
            setNote(editnote[0]['note']);
            setCurId(editnote[0]['_id']);
            dispatch(removeCurrentId());
        }
        
    });

    // console.log(editnote.length, editnote, curId, note);
    return(
        <Paper elevation={0} className={classes.multilineTextbox}>
            <Grid container spacing={2}  >
                <Grid item xs={12} className={classes.flex}>
                    <TextField value={note} id="note" name="note" onChange={(e) => setNote(e.target.value)} className={classes.input} size="large" label="Enter Note" rows={3} variant="outlined" multiline />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.flex}>
                    <Button name="submit" id="submit" onClick={clear} variant="contained"  className={classes.buttonSecondary} startIcon={<CrossIcon />}>CLEAR</Button>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.flex}>
                    <Button name="submit" id="submit" onClick={handleSubmit} className={classes.buttonPrimary} variant="contained" startIcon={<CheckIcon />}>{ curId ? 'UPDATE' : 'ADD' }</Button>
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Form;