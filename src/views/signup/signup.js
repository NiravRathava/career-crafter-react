import React from "react";
import { TextField, Button, Paper, Typography, Grid } from "@mui/material";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  signupStart,
  signupFailure,
  singupSuccess,
} from "../../store/signup/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (email === "") {
      NotificationManager.warning("please enter email", "", 2000);
    } else if (!isEmail(email)) {
      NotificationManager.warning("please enter valid email", "", 2000);
    } else if (password === "") {
      NotificationManager.warning("please enter password", "", 2000);
    } else if (password.length < 8) {
      NotificationManager.warning(
        "please must 8 character long password",
        "",
        2000
      );
    } else {
      try {
        dispatch(signupStart());
        const res = await axios.post(
          "http://192.168.1.162:8000/api/auth/signup",
          { email, password }
        );
        const token = res.data.token;
        // Store the token in a cookie
        Cookies.set("Token", token, { expires: 30 });
        dispatch(singupSuccess(res.data.user));
        NotificationManager.success("user created successFully", "", 2000);
      } catch (error) {
        NotificationManager.error(error.message, "", 2000);
        dispatch(signupFailure(error.message));
      }
    }
  };

  return (
    <Grid container height="100vh" justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        style={{ padding: "20px", width: "300px", textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          Or sign up with Google
        </Typography>
        {/* Implement Google sign up button here */}
      </Paper>
    </Grid>
  );
};

export default Signup;
