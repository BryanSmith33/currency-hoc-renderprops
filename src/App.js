import React, { Component, Fragment } from 'react';
import './App.css';

import HOC from './Components/CurrencyHOC'
import RenderProp from './Components/CurrencyRP'
import Toggle from './Components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOC</h1>
        <Toggle render={() => (
          <Fragment>
            {/* passing in some props that we use */}
            <HOC name={'Taiwan'} exchangeRate={0.032} />
            <HOC name={'Euro'} exchangeRate={0.92} />
            <HOC name={'Pound'} exchangeRate={3.2} />
          </Fragment>
        )} />
        <h1>Render Prop</h1>
        <Toggle render={() => (
          <Fragment>
            {/* notice we didn't use any other props other than render */}
            {/* One other thing to keep in mind is that we can render a component rather than JSX. If you are interested, come find me and I will show you */}
            <RenderProp render={({ amount }) => (
              <p>Euro: {(amount * 3.33).toFixed(2)}</p>
            )} />
            <RenderProp render={({ amount }) => (
              <p>Euro: {(amount * 3.33).toFixed(2)}</p>
            )} />
            <RenderProp render={({ amount }) => (
              <p>Euro: {(amount * 3.33).toFixed(2)}</p>
            )} />
          </Fragment>
        )}
        />
      </div>
    );
  }
}

export default App;
