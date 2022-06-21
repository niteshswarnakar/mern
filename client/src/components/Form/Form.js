import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";
const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const post = useSelector((state) =>
    state.posts.find((post) => post._id === currentId)
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear(e);
  };

  const clear = (e) => {
    e.preventDefault();
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };

  return (
    <Paper className={classes.container}>
      <form
        className={classes.formcontainer}
        autoComplete="off"
        noValidate
        onSubmit={handlesubmit}
      >
        <Typography variant="h5">
          {currentId ? "Editing" : "Creating"} a memory
        </Typography>
        <TextField
          variant="outlined"
          label="Creator"
          name="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Message"
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Tags"
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div>
          <FileBase
            multiple={false}
            type="file"
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={clear}
          color="secondary"
          size="small"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
