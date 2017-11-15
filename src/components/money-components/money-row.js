/**
 * @author ntishkevich
 */
import React, { Component } from 'react';
import Category from './category';
import Currency from './currency';

export default class MoneyRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: this.props.money || null
    }
  }

  render() {
    const { entry } = this.state;
    return !entry ? null :(
      <div className="money-table__row">
        <Category value={ entry.category } />
        <div className="money-block">
          <span className="money-block__value">
            <Currency value={ entry.currency } />
            { entry.value }
          </span>
          <hr className="linebreak" />
          <span className="money-block__date">{ entry.date }</span>
        </div>
      </div>
    );
  }
}
