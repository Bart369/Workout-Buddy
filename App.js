import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import Welcome from './src/components/Welcome'
import reducers from './src/reducers'
import Router from './src/Router'

class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAjb_VRx06jsnDVyNrcIKqsnSL6EsyTN1Y",
      authDomain: "workout-buddy-31b6c.firebaseapp.com",
      databaseURL: "https://workout-buddy-31b6c.firebaseio.com",
      projectId: "workout-buddy-31b6c",
      storageBucket: "workout-buddy-31b6c.appspot.com",
      messagingSenderId: "722133233706"
    }
    firebase.initializeApp(config)

  }



  render() {
    store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>

        <Router />
      
      </Provider>
    );
  }
}

export default App


