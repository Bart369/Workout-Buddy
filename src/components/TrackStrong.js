import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Page } from './common'
import StrongForm from './StrongForm'

class TrackStrong extends Component {
    render() {
        return (
            <Page>
                <StrongForm />
                <View>
                    <Text>Hi </Text>
                </View>
            </Page>
        )
    }
}

export default TrackStrong