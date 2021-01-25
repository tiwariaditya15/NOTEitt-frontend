import {makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    multilineTextbox: {
        margin: "1.5rem",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
    },
    buttonPrimary: {
        backgroundColor: "#2962ff",
        marginTop: "1.5rem",
        color: "white",
        '&:hover': {
            backgroundColor: "#2979ff"
        }
    },
    buttonSecondary:{
        backgroundColor: "#e91e63",
        marginTop: "1.5rem",
        color: "white", 
        '&:hover': {
            backgroundColor: "#f73378"
        } 
    },
    flex: {
        display: "flex",
        justifyContent: "center"
    }
}));