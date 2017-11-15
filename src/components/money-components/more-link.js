/**
 * @author ntishkevich
 */
import React, { Component } from 'react';

const MoreLink = (props) => {
  const handleClick = props.handleClick || ((e) => console.log(e));
  return (
    <div className="money-table__row money-table__link">
      <hr className="linebreak" />
      <a href="#" className="more-link" onClick={handleClick}>{ props.label || 'More...' }</a>
    </div>
  );
};

export default MoreLink;
