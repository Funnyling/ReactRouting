/**
 * @author ntishkevich
 */
import React, { Component } from 'react';

const Category = (props) => {
  const category = props.value;
  const className = `fa fa-${category.icon.toLowerCase()}`;

  return (
    <div className="category-block">
      <span className="category-block__icon">
        <i className={className} aria-hidden="true" />
        <p className="category-block__name">{ category.title }</p>
      </span>
    </div>
  );
};

export default Category;
