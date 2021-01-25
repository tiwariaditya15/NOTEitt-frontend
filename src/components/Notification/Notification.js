import { useState } from "react";
import useStyle from "./Styles";
import { useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Notification = ({ message, setShowNotification }) => {
    const [open, setOpen] = useState(true);
    
    const handleClose = (e) => {
        setOpen(false);
    };
    useEffect(() => {
        setShowNotification(false);
    }, [])
    
    return(
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="information">
                { message } 
            </Alert>
        </Snackbar>
    );
};

export default Notification;