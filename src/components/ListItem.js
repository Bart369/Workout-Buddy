import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { PageSection } from './common'

class ListItem extends Component {


    render() {
        const { name, calories, duration, distance, weight, date, uid } = [this.props]
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
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem