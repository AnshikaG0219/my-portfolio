import React, { useState, useEffect} from "react";
import { makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import { Collapse, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Comfortaa",
    color: "#fff",
    textAlign: "center"
  },
  scrollHead: {
    padding: "0rem 0.5rem",
  },
  Down: {
    fontSize: "2.5rem",
  },
  scrollButton:{
    backgroundColor: "#060930",
    color: "#fff",
    borderRadius: "0",
    marginTop: "1rem",
    '&:hover' :{
      backgroundColor: "#F4ABC4",
      color: "#060930"
    }
  },
}));



export default function Main() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      <h1>
        Hi, I'm <span style={{color: "#F4ABC4"}}>Anshika Gautam.</span>
        <br />
        A Full Stack Web Developer.
        <br />
      </h1>
      
        <Scroll to="projects">
          <IconButton className={classes.scrollButton}>
          <h4 className={classes.scrollHead}>My Projects</h4><br/><ExpandMoreIcon className={classes.Down} />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
}