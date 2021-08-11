import { AppBar, CssBaseline, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "Comfortaa",
    backgroundColor: "#060930",
  },
  icon: {
    color: "#fff",
    "&:hover": {
      color: "#F4ABC4",
    },
  },
  nav: {
    margin: "1rem",
    flexGrow: "1",
  },
  links: {
    margin: "2rem 1.5rem",
    display: "inline",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    "&:hover": {
      color: "#F4ABC4",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar>
          <CssBaseline />
          <Nav className={classes.nav}>
            <Nav.Item>
              <NavLink className={classes.links} to="/">
                HOME
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className={classes.links} to="/">
                ABOUT ME
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className={classes.links} to="/">
                PROJECTS
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className={classes.links} to="/">
                CONTACT ME
              </NavLink>
            </Nav.Item>
          </Nav>
          <IconButton
            className={classes.icon}
            href="https://github.com/AnshikaG0219"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            href="https://www.instagram.com/alcohol_markers/"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            href="https://www.linkedin.com/in/anshika-gautam/"
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
