import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import projects from "./Projectslist";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    fontFamily: "Comfortaa",
    maxWidth: '100%',
  },
  layout:{
    flexGrow:1,
    padding: theme.spacing(2),
  }

}));

export default function Projects() {
  const classes = useStyles();
  return (
    <>
      <h1
        id="projects"
        style={{
          fontFamily: "Comfortaa",
          color: "#fff",
          textAlign: "center",
          margin: "2% 5%",
          paddingBottom: "5%",
        }}
      >
        MY PROJECTS
      </h1>
      <div className={classes.root}>
        <Grid container justify="center" className={classes.layout}>
        {projects.map((projects) => (
          <Grid projects key={projects.id} md={4} sm={12} spacing={2}>
            <ProjectCard projects={projects} />
          </Grid>
        ))}
        </Grid>
        </div>
    </>
  );
}
