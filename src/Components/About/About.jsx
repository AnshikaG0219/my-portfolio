import React from "react";
import { Image } from "react-bootstrap";
import profile from "../asset/profile.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import techstack from "./TechStack";
import Tech from "./Tech";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    background: "none",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Comfortaa",
    fontSize: "1rem",
  },
  stack: {
    height: "50vh",
  },
  header: {
    margin: "3% 7%",
  },
  item: {
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <h1 className={classes.header}>ABOUT</h1>
      <Image
        src={profile}
        width="300px"
        height="300px"
        roundedCircle
        title="Anshika Gautam (Yes that's me)"
      />
      <div style={{ width: "50%", margin: "3rem auto" }}>
        Hello there! I'm Anshika, a sophomore at Indira Gandhi Delhi Technical
        University for Women, Delhi. I am a Developer, a mentor and a learner. I
        love building Responsive and Dynamic Web Apps.
      </div>
      <h1 className={classes.header}>TECHSTACK</h1>
      <Grid container className={classes.stack}>
        {techstack.map((techstack) => (
          <Grid
            item
            key={techstack.id}
            md={2}
            xs={4}
            justifyContent="center"
            className={classes.item}
          >
            <Tech techstack={techstack} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
