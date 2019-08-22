import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import logoImage from "../assets/Logo.jpg";

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.backgrounContainer}> */}
        <Grid container spacing={0} className={classes.cont}>
          <Grid item xs={12}>
            <img src={logoImage} alt="logo" className={classes.logo} />
          </Grid>
        </Grid>
      {/* </div> */}
    </div>
  );
}
