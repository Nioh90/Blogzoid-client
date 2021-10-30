import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column-reverse",
    },
  },
  section: {
    margin: "20px",
    flex: 1,
    minWidth: "400px",
  },
  imageSection: {
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    border: "5px black solid",
    borderRadius: "10px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  commentsInnerContainer: {
    minWidth: "200px",
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
}));
