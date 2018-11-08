// RENDER PROP
import React, { Component, Fragment } from 'react'

// creating our intial class set up
class RenderProp extends Component {
	//adding a little state
	state = {
		amount: 1
	}
	//two methods to increase/decrease amount on state
	// these are using the public class filed syntax to bind this
	handleIncreaseAmount = () => {
		this.setState((prevState) => ({ amount: prevState.amount + 1 }))
	}
	hhandleDecreaseAmount = () => {
    this.setState((prevState) => ({ amount: prevState.amount - 1 }))
	}
	render() {
		return (
			// using fragment rather than any extra divs. Fragments are nice because they allow our markup to be clean and semantic
			<Fragment>
				<p>US Dollar: ${this.state.amount}</p>
				<button onClick={this.handleIncreaseAmount}>+</button>
				<button onClick={this.hhandleDecreaseAmount}>-</button>
				{/* invoke our render function that is a prop whilst passing in state as an argument */}
				{this.props.render(this.state)}
			</Fragment>
		)
	}
}

export default RenderProp

