import { FETCH_POSTS, NEW_POST } from "./types";

// action creator??
export function fetchPosts() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((posts) =>
        /* dispatch sstate to reducer*/ dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      )
    );
  };
}
