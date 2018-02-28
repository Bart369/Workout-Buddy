import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import CardioForm from './CardioForm'
import { Page, PageSection, Button } from './common'

class TrackCardio extends Component {
    render() {
        return(
            <CardioForm />
        )
    }
}

export default TrackCardio