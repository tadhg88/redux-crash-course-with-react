import { FETCH_POSTS, NEW_POST } from "./types";

// action creator??
export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json().then((posts) =>
      /* dispatch state to reducer*/ dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    )
  );
};
