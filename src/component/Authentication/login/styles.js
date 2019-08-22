import { makeStyles } from '@material-ui/core/styles';
// import bg from "../../assets/books.jpg";

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      // backgroundImage:`url(${bg})`,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      padding:'14px !important'
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#fff !important"
    },
    textField: {
      flexBasis: 200,
      color: "#fff"
    },
    changeColor: {
        color: "#fff !important",
        fontSize: "20px"
      },

  }));