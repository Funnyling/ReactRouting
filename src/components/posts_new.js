import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const {
      meta: { touched, error },
      label,
      input } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{ label }</label>
        <input
          type="text"
          className="form-control"
          { ...input }
        />
        <div className="text-help">
          { touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from values
  if (!values.title) {
    errors.title = 'Enter a title!';
  } else if (values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  }

  if (!values.tags) {
    errors.tags = 'Enter some tags.';
  }

  if (!values.content) {
    errors.content = 'Enter some content.';
  }

  // if error has any properties, redux form assumes form is invalid,
  // if errors is empty, the form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);

