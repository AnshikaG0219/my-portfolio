import { makeStyles, TextField, Button } from "@material-ui/core";
import React from "react";
import "./style.css";
import emailjs from "emailjs-com";
import { createTheme, ThemeProvider   } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2% auto",
    fontFamily: "Comfortaa",
    color: "#fff",
    "& label.Mui-focused": {
      color: "#F4ABC4",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#F4ABC4   ",
      color: "#fff",
    },
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(2),
      width: "50%",
    },
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column'
    }
  },
  submit: {
    borderRadius: "0px",
    backgroundColor: "#333456",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Comfortaa",
    "&:hover": {
      backgroundColor: "#F4ABC4",
      color: "#060930",
    },
    "&:active": {
      backgroundColor: "#F4ABC4",
      color: "#060930",
    },
  },
}));

const theme = createTheme({
    palette: {
        type : "dark"
    },
    typography: {
      fontFamily: "Comfortaa"
    }
})


export default function Contact() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm( "service_t3wamfg", "template_gvg5htr", e.target, "user_1JI3vTYRgFNTyieRk8Fgr")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <ThemeProvider theme={theme}>
      <form className={classes.root} id="contact" onSubmit={sendEmail}>
        <h2 style={{textAlign: "center", margin: "auto", padding: "2rem 0"}}>Contact Me</h2>
        <TextField
          id="filled-basic"
          name="name"
          label="Name"
          color="inherit"
          className="textfield"
          InputLabelProps={{ className: "textfield__label" }}
        />
        <TextField
          id="filled-basic"
          name="email"
          label="Email"
          className="textfield"
          InputLabelProps={{ className: "textfield__label" }}
        />
        <TextField
          id="filled-multiline-static"
          name="message"
          label="Message"
          className="textfield"
          multiline
          rows={3}
          InputLabelProps={{ className: "textfield__label" }}
        />
        <Button className={classes.submit} type="submit">
          Submit
        </Button>
      </form>
      </ThemeProvider>
  );
}
