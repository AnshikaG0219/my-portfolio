import { AppBar, CssBaseline, Button, Toolbar, useTheme } from "@material-ui/core";
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
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "Comfortaa",
    backgroundColor: "#060930",
  },
  mobileView: {
    display: "flex",
    flexDirection: "column",
    padding: "0.4rem"
  },
  icon: {
    color: "#fff",
    "&:hover": {
      color: "#F4ABC4",
    },
    
    [theme.breakpoints.down('sm')] : {
      display: "none"
    }
  },
  nav: {
    margin: "1rem",
    flexGrow: "1",
    
    [theme.breakpoints.down('sm')] : {
      display: "none"
    }
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
  // Mlinks: {
  //   margin: "0.5rem" ,
  //   textDecoration: "none",
  //   color: "#fff",
  //   display: "flex",
  //   '&: hover' : {
  //     color: "#F4ABC4"
  //   }
  // },
  hamMenu:{
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.up('sm')] : {
      display: "none"
    }
  },
}));

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles();
  const size = useMediaQuery(theme.breakpoints.down('sm'));
  const [show, setShow] = useState(false);

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
      <Button className={classes.hamMenu} onClick={() => setShow(!show)}><MenuIcon/></Button>
        <Toolbar className={classes.toolbar}>
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
