import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Notification from "./components/Notification/Notification";
import { Container, Grid, AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "./actions/notes";
import Skeleton from "@material-ui/lab/Skeleton"

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const state = useSelector(state => state.notes);

  useEffect(() => {
      dispatch(getNotes());
  }, []);
  
  const skelton = () => {
    return(
     <Container className={classes.marginTop}>
        <Skeleton /> <Skeleton animation={false} /> <Skeleton animation="wave" />
        <Skeleton /> <Skeleton animation={false} /> <Skeleton animation="wave" />
     </Container>
    );
  };

  return (
          <>
            <AppBar className={classes.appBar} justify="center" position="static" color="secondary">
                <Typography variant="h3" justify="center">NOTEitt</Typography>
            </AppBar>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Form setShowNotification={setShowNotification} />
              </Grid>
              <Grid item xs={12} sm={7}>
                
                { state.length === 0 ? skelton() :  <Notes /> } 
              
              </Grid>
            </Grid> 
            { showNotification && <Notification message="Note Added." setShowNotification={setShowNotification}/> }
          </>
  );
}

export default App;
