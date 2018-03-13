import React from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Page, PageSection, Button} from './common'

const TrackOrLog = () => {

    goTrackCardio = () => {
        Actions.trackCardio()
    }

    goTrackStrong= () => {
        Actions.trackStrong()
    }

    viewLogs = () => {
        Actions.viewLogs()
    }

    return (
        <Page>
            <PageSection>
                <Button onPress={this.goTrackCardio.bind(this)}>Cardio</Button>
                <Button onPress={this.goTrackStrong.bind(this)}>Strength Training</Button>
                <Button onPress={this.viewLogs.bind(this)}>View Logs</Button>           
            </PageSection>
        </Page>
    )
}

export default TrackOrLog