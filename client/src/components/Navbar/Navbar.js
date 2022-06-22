import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import memories from "../../images/memories.png";
const Navbar = () => {
  const user = null;
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          height="60"
          alt="memories"
        />
        <Toolbar>
          {user ? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => console.log("clicked")}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="contained" color="primary">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/auth"
                color="primary"
              >
                Sign In
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
