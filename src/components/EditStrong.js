import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import StrongForm from './StrongForm'
import { Page, PageSection, Button } from './common'
import { strongUpdate, saveEditStrong, deleteStrong } from '../actions'

class EditStrong extends Component {

    componentWillMount(){
        _.each(this.props.strong, (value, prop) => {
            this.props.strongUpdate({ prop, value })
        })
    }


    onButtonPress() {
        const { move, weights, reps, weight, date,
            move2, weights2, reps2,
            move3, weights3, reps3,
            move4, weights4, reps4,
            move5, weights5, reps5,
        } = this.props

        this.props.saveEditStrong({
            move, weights, reps, weight, date,
            move2, weights2, reps2,
            move3, weights3, reps3,
            move4, weights4, reps4,
            move5, weights5, reps5, uid: this.props.strong.uid })
    }

    onAccept() {
        const { uid } = this.props.strong;
        this.props.deleteStrong({ uid });
    }

    render() {
        return (
            <Page>
                <StrongForm />
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

const mapStateToProp = (state) => {
    const { move, weights, reps, weight, date,
        move2, weights2, reps2,
        move3, weights3, reps3,
        move4, weights4, reps4,
        move5, weights5, reps5,
    } = state.strongForm

    return {
        move, weights, reps, weight, date,
        move2, weights2, reps2,
        move3, weights3, reps3,
        move4, weights4, reps4,
        move5, weights5, reps5,
    }
}

export default connect(mapStateToProp, { strongUpdate, saveEditStrong, deleteStrong }) (EditStrong)