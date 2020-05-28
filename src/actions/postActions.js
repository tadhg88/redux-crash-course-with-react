import { FETCH_POSTS, NEW_POST } from "./types";

// action creator??
export const fetchPosts = () => (dispatch) => {
  console.log("fetchPosts called");
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json().then((posts) =>
      /* dispatch state to reducer */ dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    )
  );
};

export const createPost = (postData) => (dispatch) => {
  console.log("createPost ACTION called");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      /* dispatch state to reducer */ dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
