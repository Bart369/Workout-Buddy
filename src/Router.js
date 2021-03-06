import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm'
import TrackOrLog from './components/TrackOrLog'
import TrackCardio from './components/TrackCardio'
import CardioList from './components/CardioList'
import TrackStrong from './components/TrackStrong'
import EditCardio from './components/EditCardio'
import EditStrong from './components/EditStrong'
import ViewLogs from './components/ViewLogs'

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
                            title='Record your Cardio Workout'                  
                        />

                        <Scene
                            key='trackStrong'
                            component={TrackStrong}
                            title='Record your Strength Training'
                        />

                        <Scene
                            key='cardioEdit'
                            component={EditCardio}
                            title='Edit Workout Log'
                        />

                        <Scene
                            key='strongEdit'
                            component={EditStrong}
                            title='Edit Workout Log'
                        />

                        <Scene
                            key='viewLogs'
                            component={ViewLogs}
                            title='View and Edit Past Entries'
                        />

                    </Scene>
                </Scene>
            </Router>
    
        )

    }
}

export default RouterComponent