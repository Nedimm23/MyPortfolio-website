import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(0)}
              to="/"
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
              to="/services"
              className={classes.link}
            >
              Services
            </Grid>
            <Grid
              item
              component={Link}
              to="/customsoftware"
              className={classes.link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              component={Link}
              to="/mobileapps"
              className={classes.link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              to="/websites"
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
              onClick={() => props.setValue(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
              onClick={() => props.setValue(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
              onClick={() => props.setValue(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
              onClick={() => props.setValue(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              About Us
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              History
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(4)}
              to="/contact"
              className={classes.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
