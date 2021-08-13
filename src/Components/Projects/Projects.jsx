import React from "react";
import { makeStyles } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import projects from "./Projectslist";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Comfortaa",
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
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
      <div className={classes.root}>
        {projects.map((projects) => (
            <ProjectCard projects={projects} />
        ))}
        </div>
    </>
  );
}
