import React from 'react'
import Contact from '../Contact/Contact'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#060930",
        borderTop: "3px solid #F4ABC4",
        height: "100%",
        color: "#595B83",
        textAlign: "center",
        fontFamily: "Comfortaa"
    },
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Contact/>
            <div style={{padding: "2% 5%"}}>© 2021, Anshika Gautam</div>
        </div>
    )
}
