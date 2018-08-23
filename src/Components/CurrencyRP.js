// RENDER PROP 
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

// creating our intial class set up
class RenderProp extends Component {
  //adding a little state
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
  render(){
    return (
      // using fragment rather than any extra divs. Fragments are nice because they allow our markup to be clean and semantic
      <Fragment>
        <p>US Dollar: ${(this.state.amount)}</p>
        <button onClick={this.addOne}>+</button>
        <button onClick={this.minusOne}>-</button>
        {/* invoke our render function that is a prop whilst passing in state as an argument */}
        {this.props.render(this.state)}
      </Fragment>
    )
  }
}

export default RenderProp

// using prop types to specifiy a type for our props
RenderProp.propTypes = {
  render: PropTypes.func
}