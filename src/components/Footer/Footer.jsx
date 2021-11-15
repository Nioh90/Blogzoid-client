import { Container, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import kLogo from "../../Images/k-logo.png";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container display="flex" maxWidth="sm">
        <Link
          justifyContent="center"
          target="_blank"
          color="white"
          href="https://kunalpaul.herokuapp.com/"
        >
          <img className={classes.img} src={kLogo} alt="K logo" />
        </Link>
        <Typography
          className={classes.footerText}
          justifyContent="center"
          variant="body2"
        >
          {"Copyright © "}
          {new Date().getFullYear()}
          {" Kunal Paul"}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
