import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import LockOutLinedIcon from "@mui/icons-material/LockOutlined";
import GoogleLogin from "react-google-login";
import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const handleShowPassword = () => {
    return setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => e.preventDefault();

  const handleSubmit = (e) => e.preventDefault();

  const googleSuccess = async (res) => {
    console.log(res);
  };

  const googleFailure = (error) => {
    console.log("google le sign in garna saken :( ");
    console.log(error);
  };

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3}>
          <Avatar>
            <LockOutLinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstname"
                    label="First Name "
                    handleChange={handleChange}
                    autFocus
                    half
                  />
                  <Input
                    name="lastname"
                    label="Last Name "
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  handleChange={handleChange}
                />
              )}
            </Grid>
            <GoogleLogin
              clientId="632680808031-obs4m1de5o4akkuh14vmg2g7jpgqomli.apps.googleusercontent.com"
              render={(renderProps) => {
                return (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    // disabled={renderProps.disabled}
                  >
                    Google Sign In{" "}
                  </Button>
                );
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isSignup ? "Sign Up" : "Login"}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? `Already have an account , Login here`
                    : `Don't have an account, Sign up Here`}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
