/**
 * @author ntishkevich
 */
import React, { Component } from 'react';

const currencyMap = {
  USD: '$',
  EUR: 'hui',
  BYN: 'Br'
};

const Currency = (props) => {
  return <span className="money-block__currency">{ currencyMap[props.value] }</span>
};

export default Currency;
