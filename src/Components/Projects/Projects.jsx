import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import projects from "./Projectslist";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    flexGrow: 1,
    borderRadius: "0",
    fontFamily: "Comfortaa",
  },
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
      <Grid container className={classes.root}>
        {projects.map((projects) => (
          <Grid
            item
            key={projects.id}
            md={4}
            xs={12}
            justifyContent="center"
            spacing={2}
          >
            <ProjectCard projects={projects} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
