import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { PageSection } from './common'

class ListItem extends Component {

    pressCardio() {
        // to go to this scene with the following prop
        Actions.cardioEdit({ cardio: this.props.cardio })
    }

    pressStrong() {
        Actions.strongEdit({ strong: this.props.strong })
    }

    renderCardio() {
        const { name, calories, duration, distance, weight, date, uid } = this.props.cardio
        return (
            <TouchableWithoutFeedback onPress={this.pressCardio.bind(this)}>
                <View>
                    <PageSection>
                        <Text style={styles.titleStyle}>
                            Date: {date}
                            Workout: {name}{'\n'}
                            Calories: {calories}{'\n'}
                            Duration: {duration}{'\n'}
                            Distance: {distance} miles{'\n'}
                            Weight: {weight} lbs{'\n'}
                        </Text>
                    </PageSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderStrong() {
        const { move, weights, reps, weight, date,
                move2, weights2, reps2,
                move3, weights3, reps3,
                move4, weights4, reps4,
                move5, weights5, reps5,
            } = this.props.strong

        return (
            <TouchableWithoutFeedback onPress={this.pressStrong.bind(this)}>
                <View>
                    <PageSection style={{ flexDirection: 'column' }}>
                            <Text style={styles.titleStyle}>
                                Date: {date} {'\n'}
                                Weight: {weight} lbs{'\n'}
                                {'\n'}
                                Move: {move}{'\n'}
                                Weights: {weights}{'\n'}
                                Reps: {reps}{'\n'}
                                
                            </Text>

                            {move2 ?
                                <Text style={styles.titleStyle}>
                                    Move 2: {move2}{'\n'}
                                    Weights: {weights2}{'\n'}
                                    Reps: {reps2}{'\n'}
                                    {'\n'}
                                </Text> 
                            : null }

                            {move3 ?
                                <Text style={styles.titleStyle}>
                                    Move 3: {move3}{'\n'}
                                    Weights: {weights3}{'\n'}
                                    Reps: {reps3}{'\n'}
                                    {'\n'}
                                </Text>
                            : null}

                            {move4 ?
                                <Text style={styles.titleStyle}>
                                    Move 4: {move4}{'\n'}
                                    Weights: {weights4}{'\n'}
                                    Reps: {reps4}{'\n'}
                                    {'\n'}
                                </Text>
                            : null }

                            {move5 ?
                                <Text style={styles.titleStyle}>
                                    Move 5: {move5}{'\n'}
                                    Weights: {weights5}{'\n'}
                                    Reps: {reps5}{'\n'}
                                </Text>
                            : null }
                        
                    </PageSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    // StrongForm is passing this.props.renderCardio = false
    // CardioForm is passing this.props.renderCardio = true

    renderList() {
        switch (this.props.renderCardio) {
            case true:
                return this.renderCardio()
            case false:
                return this.renderStrong()
        }

    }

    render() {
        return(
            this.renderList()           
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

export default ListItem