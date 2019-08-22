import { makeStyles } from "@material-ui/core/styles";
import bg from "../assets/books.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${bg})`
  
  },
  backgrounContainer:{
    backgroundColor:"black",
    opacity:0.6,
    height:"auto"  
},
}));