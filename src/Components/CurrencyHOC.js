import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// common naming patterin is to start withSOMETHING
// just a function that takes in BaseComponent as a param and then returns a new class we are calling HOC
const withCurrency = (BaseComponent) =>
  class HOC extends Component {
    //setting a little state
    state = {
      amount: 1
    }
    //two methods to increase/decrease amount on state
    // these are using the public class filed syntax to bind this
    addOne = () => {
      this.setState((state) => (
        { amount: state.amount + 1 }
      ))
    }
    minusOne = () => {
      this.setState((state) => (
        { amount: state.amount - 1 }
      ))
    }
    render() {
      // destructring exchangeRate and name off of props
      const { exchangeRate, name } = this.props
      return (
        <Fragment>
          <p>US Dollar: ${this.state.amount}</p>
          <button onClick={this.addOne}>+</button>
          <button onClick={this.minusOne}>-</button>
          {/* here is where we us the BaseComponent while using some props on it taht will be passed in when it is actually used in App.js */}
          <BaseComponent
            amount={this.state.amount}
            name={name}
            exchangeRate={exchangeRate} />
        </Fragment>
      )
    }
  }

//Component that we will use when we invoke withCurrency. This is often created below but could just as easily be imported in
// name, amount and exchangeRate is coming from the BaseComponent on line 33 above
const Exchange = ({ name, amount, exchangeRate }) => <p>{name}: {(amount * exchangeRate).toFixed(2)}</p>

// just like with a higer order function, we need a variable to hold our newly created class from withCurrency
const CurrenciesWithExchange = withCurrency(Exchange)

export default CurrenciesWithExchange

Exchange.propTypes = {
  name: PropTypes.string,
  exchangeRate: PropTypes.number
}