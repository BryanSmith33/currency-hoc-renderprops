//TOGGLE RENDER PROP
import React, { Component } from 'react'

class Toggle extends Component {
  // creating our intial class set up
  state = {
    visible: true
  }
  //method to updat visible on state
  // thihs is using the public class filed syntax to bind this
  handleUpdateToggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }
  render() {
    return <div>
				{/* boiler plate */}
				<button onClick={this.handleUpdateToggle}>Show/Hide</button>
				{/* where the magic happens. checking to see if visible is true on state and then invoke our render function that is a prop */}
				{this.state.visible && this.props.render()}
			</div>
  }
}

export default Toggle