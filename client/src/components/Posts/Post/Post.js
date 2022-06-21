import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts.js";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
const Post = ({ currentId, setCurrentId, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {}, [currentId, post]);
  return (
    <Card className={classes.container}>
      <CardMedia image={post.selectedFile} title={post.title} />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div>
        <Button size="large" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <Typography className={classes.title} variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          className={classes.message}
          variant="body2"
          color="textSecondary"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <div>
        <Typography variant="body2" gutterBottom color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          {"  "} Likes {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
