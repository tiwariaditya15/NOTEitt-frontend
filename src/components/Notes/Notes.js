import { useState, useEffect } from "react";
import Note from "./Note/Note";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import useStyle from "./styles"; 

const Notes = ({ setEditId }) => {
    const notesStore = useSelector(state => state.notes);
    // console.log(notesStore);
    const classes = useStyle();
    return(
        <>
            <Grid container direction="row"  alignItems="center" justify="space-between"  spacing={3} className={classes.gridList}>
            {
                notesStore.map(note => {
                   return(
                        <Grid item  xs={12} sm={6} >
                            <Note note={note} setEditId={setEditId}/>
                        </Grid>
                   );
                })
            }
            </Grid>
        </>
    );
};

export default Notes;