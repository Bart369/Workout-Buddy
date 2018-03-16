import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { PageSection } from './common'

class ListItem extends Component {
    state = {
        showCardio: true
    }

    renderCardio() {
        const { name, calories, duration, distance, weight, date, uid } = this.props.cardio
        return (
            <View>
                <PageSection>
                    <Text style={styles.titleStyle}>
                        Workout: {name}{'\n'}
                        Calories: {calories}{'\n'}
                        Duration: {duration}{'\n'}
                        Distance: {distance} miles{'\n'}
                        Weight: {weight} lbs{'\n'}
                        Date: {date}
                    </Text>
                </PageSection>
            </View>
        )
    }

    renderStrong() {
        const { move, weights, reps, weight, date } = this.props.strong
        return (
            <View>
                <PageSection>
                    <Text style={styles.titleStyle}>
                        Workout: {move}{'\n'}
                        Weights: {weights}{'\n'}
                        Reps: {rep}{'\n'}
                        Weight: {weight} lbs{'\n'}
                        Date: {date}
                    </Text>
                </PageSection>
            </View>
        )
    }

    render() {
        {this.props.renderCardio ? this.renderCardio() : this.renderStrong()}
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem