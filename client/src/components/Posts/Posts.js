import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const Posts = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className={classes.container}>
      {!posts.length && <CircularProgress />}
      {posts.length && (
        <Grid container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post
                currentId={currentId}
                setCurrentId={setCurrentId}
                post={post}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
