import React, { Component } from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App;
