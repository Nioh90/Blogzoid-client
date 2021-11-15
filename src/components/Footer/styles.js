import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "white",
    textAlign: "center",
  },
  img: {
    maxHeight: "75px",
    borderRadius: "100px",
  },
  footerText: {
    fontSize: "1rem",
  },
}));
