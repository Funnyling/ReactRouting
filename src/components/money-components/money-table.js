/**
 * @author ntishkevich
 */
import React, { Component } from 'react';
import MoneyRow from './money-row';
import MoreLink from './more-link';

export default class MoneyTable extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const entry = {
      date: '10 Sep 2017',
      value: 41.88,
      currency: 'USD',
      category: {
        title: 'Books',
        icon: 'book'
      },
      type: 'expense'
    };

    const data = [];
    for(let i = 0; i < 5; i++) {
      const newEntry = {
        ...entry,
        id: i
      };

      data.push(newEntry);
    }

    this.setState({ data });
  }
  render() {
    return (
      <div className="money-table">
        { this.state.data.map(item => <MoneyRow money={item} key={item.id} />) }
        { this.props.isShort ? <MoreLink /> : null}
      </div>
    );
  }
}
