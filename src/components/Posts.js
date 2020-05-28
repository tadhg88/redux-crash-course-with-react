import React, { Component } from "react";
import PropTypes from "prop-types";
// connects components to redux store provided by Provider component
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>
          {post.title}
          <p>{post.body}</p>
        </h3>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

// run typechecking on the props for a component, issues will be shown as warnings in console
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

// get new items from the state, mapStateToProps, get state for redux and map it to properties of component
const mapSateToProps = (state) => ({
  posts: state.posts.items,
});

// map state to properties
export default connect(mapSateToProps, { fetchPosts })(Posts);
