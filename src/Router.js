import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm'
import TrackOrLog from './components/TrackOrLog'
import TrackCardio from './components/TrackCardio'
import CardioList from './components/CardioList'

class RouterComponent extends Component {

    componentWillMount() {
        setTimeout(() => {
            Actions.auth()
        }, 3000);
    }

    render() {

        const logUserOut = () => {
            firebase.auth().signOut()
                .then(() => {
                    Actions.auth()
                })
        }

        return (
            <Router>
                <Scene key='root'hideNavBar>
    
                    <Scene key='welcome'>
                        <Scene key='welcome' component={Welcome}  initial />
                    </Scene>
    
                    <Scene key='auth'>
                        <Scene key='login' component={LoginForm} title='Please Login' />
                    </Scene>

                    <Scene key='main'>

                        <Scene
                            key='trackOrLog'
                            component={TrackOrLog}
                            title='Track workouts or View logs'
                            onLeft={() => logUserOut()}
                            leftTitle='Log Out' 
                            initial
                        />

                        <Scene
                            key='trackCardio'
                            component={TrackCardio}
                            title='Record your results'                  
                        />

                        <Scene
                            key='viewLogs'
                            component={CardioList}
                            title='Checkout Your Hardwork'
                        />

                    </Scene>
                </Scene>
            </Router>
    
        )

    }
}

export default RouterComponent