import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Posts</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete post
        </button>
        <h3>{ post.title }</h3>
        <h6>Tags: { post.tags }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  const { id } = ownProps.match.params;
  return { post: posts[id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
