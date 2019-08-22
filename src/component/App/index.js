import React from "react";
import Title from "../Title/"
import { useStyles } from "./styles"
import Login from "../Authentication/login"


export default function MainApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <div className={classes.backgrounContainer}>
       <Title />
       <Login />
       </div>
    </div>
  );
}

