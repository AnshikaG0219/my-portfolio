import { AppBar, CssBaseline, Button, Toolbar } from "@material-ui/core";
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import { Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Scroll } from "react-scroll";
import items from "./ItemList";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "Comfortaa",
    backgroundColor: "#060930",
  },
  mobileView: {
    display: "flex",
    flexDirection: "column",
    padding: "0.4rem",
    textAlign: "center"
  },
  icon: {
    color: "#fff",
    "&:hover": {
      color: "#F4ABC4",
    },
    [theme.breakpoints.down('sm')] : {
      height: "0",
      display: "none"
    }
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
  hamMenu:{
    color: "#fff",
    display: "flex",
    padding: "0.8rem 0",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up('sm')] : {
      display: "none"
    }
  },
  toolbar: {
    [theme.breakpoints.down('sm')] : {
      height: "0",
      display: "none"
    }

  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
      <Button className={classes.hamMenu} onClick={() => setShow(!show)}><MenuIcon/></Button>
        <Toolbar className={show? classes.mobileView : classes.toolbar}>
          <CssBaseline />
          <Nav className={show? classes.mobileView : classes.nav}>
            {items.map((items) => (
              <Nav.Item>
                <Scroll to={items.to}>
                  <NavLink to={items.to} className={classes.links}>
                    {items.title}
                  </NavLink>
                </Scroll>
              </Nav.Item>
            ))}
          </Nav>
          <Row>
            <Col md={4} sm={4}>
              <IconButton
                className={classes.icon}
                href="https://github.com/AnshikaG0219"
              >
                <GitHubIcon />
              </IconButton>
            </Col>
            <Col md={4} sm={4}>
              <IconButton
                className={classes.icon}
                href="https://www.instagram.com/alcohol_markers/"
              >
                <InstagramIcon />
              </IconButton>
            </Col>
            <Col md={4} sm={4}>
              <IconButton
                className={classes.icon}
                href="https://www.linkedin.com/in/anshika-gautam/"
              >
                <LinkedInIcon />
              </IconButton>
            </Col>
          </Row>
        </Toolbar>
          
      </AppBar>
    </>
  );
}
