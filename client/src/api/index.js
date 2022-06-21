import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (post) => axios.post(url, post);

export const updatePost = (id, post) => axios.post(`${url}/${id}`, post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
