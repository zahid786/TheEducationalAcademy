import { makeStyles } from "@material-ui/core/styles";
// import bg from "../assets/books.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundImage: `url(${bg})`
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    width: "100%",
    height: "100%"
  },
  // backgrounContainer: {
  //   backgroundColor: "black",
  //   opacity: 0.8,
  //   height: "auto"
  // },
  logo: {
    width: "100%"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#fff !important"
  },
  textField: {
    flexBasis: 200,
    color: "#fff"
  }
}));
