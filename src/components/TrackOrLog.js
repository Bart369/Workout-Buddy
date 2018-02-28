import React from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Page, PageSection, Button} from './common'

const TrackOrLog = () => {

    goTrackCardio = () => {
        Actions.trackCardio()
    }

    return (
        <Page>
            <PageSection>
                <Button onPress={this.goTrackCardio.bind(this)}>Track Cardio</Button>
                <Button>Track Weights</Button>
                <Button>View Logs</Button>           
            </PageSection>
        </Page>
    )
}

export default TrackOrLog