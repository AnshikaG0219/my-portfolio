import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Image } from "react-bootstrap";
import img from "../asset/bg.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    color: "#fff",
    fontFamily: "Comfortaa",
    background: "rgb(6, 9, 48)",
    textAlign: "center",
    marginBottom: "2rem",
    borderRadius: "0",
  },
  media: {
    height: 200,
  },
  link:{
    color: "#fff",
    padding: "1rem",
    '&:hover': {
      color: "#F4ABC4"
    }
  }
});

export default function MediaCard({ projects }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image
          className={classes.media}
          alt={projects.title}
          title={projects.title}
          src={projects.media_src}
        ></Image>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Comfortaa" }}
          >
            {projects.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        size="small"
        fullWidth
        href={projects.url}
        className={classes.link}
      >
        <GitHubIcon />
      </IconButton>
    </Card>
  );
}
