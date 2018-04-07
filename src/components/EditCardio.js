import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import CardioForm from './CardioForm'
import { Page, PageSection, Button } from './common'
import { cardioUpdate, saveEditCardio, deleteCardio } from '../actions'

class EditCardio extends Component {

    componentWillMount() {
        _.each(this.props.cardio , ( value, prop ) => {
            this.props.cardioUpdate({ prop, value })
        })
    }

    onButtonPress(){
        const { name, calories, duration, distance, weight, date } = this.props
        this.props.saveEditCardio({ name, calories, duration, distance, weight, date, uid: this.props.cardio.uid })
    }

    onAccept() {
        const { uid } = this.props.cardio;
        this.props.deleteCardio({ uid });
    }

    render(){
        return (
            <Page>
                <CardioForm />
                <PageSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </PageSection>

                <PageSection>
                    <Button onPress={this.onAccept.bind(this)}>
                        Delete Workout Data
                    </Button>
                </PageSection>

            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, calories, duration, distance, weight, date } = state.cardioForm

    return { name, calories, duration, distance, weight, date }
}

export default connect(mapStateToProps, { cardioUpdate, saveEditCardio, deleteCardio }) (EditCardio)