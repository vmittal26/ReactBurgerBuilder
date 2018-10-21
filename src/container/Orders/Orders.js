import React, { Component } from 'react'
import Order from '../../components/Order/Order';

export default class Orders extends Component {
  render() {
    return (
      <div className="Orders">
        <Order/>
        <Order/>
      </div>
    )
  }
}
