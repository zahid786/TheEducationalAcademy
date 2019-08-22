import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { login } from "../../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logicalExpression } from "@babel/types";
import { withRouter } from "react-router-dom";

function Login(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });
  const [inputValue, setInputValue] = useState({
    email: "zahidali8208@gmail.com",
    pass: "zahid786"
  });
  const handleInput = e => {
    setInputValue({ ...inputValue, email: e.target.value });
    // console.log('email' ,e.target.value);
  };
  const handlePassword = e => {
    setInputValue({ ...inputValue, pass: e.target.value });
    // console.log('password',e.target.value);
  };
  const sendLoginData = () => {
    let dataLogin = {
      email: inputValue.email,
      pass: inputValue.pass
    };
    console.log("==============Login Data================");
    console.log(dataLogin);
    console.log("==============end====================");
    props.login(dataLogin);
  };

  useEffect(() => {
    console.log("user", props.user);

    if (props.user) {
      console.log("user in login", props.history);
      props.history.push("/dashboard");
    }
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.backgrounContainer}>
        <Grid container spacing={0} className={classes.cont}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography
              variant="h3"
              gutterBottom
              style={{ color: "yellow", textAlign: "center" }}
            >
              Login
            </Typography>
            <TextField
              id="outlined-full-width"
              onChange={handleInput}
              className={clsx(classes.margin, classes.textField)}
              label="Email / Mobile"
              style={{ margin: 8 }}
              helperText="Full width!"
              fullWidth
              type="email"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "white"
                }
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.changeColor
                }
              }}
            />
            <TextField
              className={classes.margin}
              id="outlined-adornment-password"
              style={{ margin: 8 }}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              label="Password"
              fullWidth
              onChange={handlePassword}
              InputLabelProps={{
                style: {
                  color: "white"
                }
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.changeColor
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      style={{ color: "white" }}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Link to="/dashboard">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className={classes.button}
                style={{ margin: 8 }}
                onClick={sendLoginData}
              >
                Login
              </Button>
            </Link>

            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "yellow", textAlign: "end" }}
            >
              Forgot Password
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={4}>
            <Typography
              variant="h6"
              style={{ color: "yellow", textAlign: "center" }}
            >
              The Educational Academy
            </Typography>
            <hr />
            <Typography
              variant="subtitle1"
              style={{ color: "yellow", textAlign: "center" }}
            >
              Address:
              <br />
              St# 14 Jameel Town Chatri Chowk <br /> <hr />
              Ghulama Muhammad Abad Faisalabad
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              style={{ color: "yellow", textAlign: "center" }}
            >
              Useful Links
            </Typography>
            <hr />
            <Typography
              variant="subtitle1"
              style={{ color: "yellow", textAlign: "center" }}
            >
              Address:
              <br />
              St# 14 Jameel Town Chatri Chowk <br /> <hr />
              Ghulama Muhammad Abad Faisalabad
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              style={{ color: "yellow", textAlign: "center" }}
            >
              Useful Links
            </Typography>
            <hr />
            <Typography
              variant="subtitle1"
              style={{ color: "yellow", textAlign: "center" }}
            >
              Address:
              <br />
              St# 14 Jameel Town Chatri Chowk <br /> <hr />
              Ghulama Muhammad Abad Faisalabad
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { login }
)(withRouter(Login));
