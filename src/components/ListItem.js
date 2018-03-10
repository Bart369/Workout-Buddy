import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { PageSection } from './common'

class ListItem extends Component {


    render() {
        const { name, calories } = this.props.cardio
        return (
            <View>
                <PageSection>
                    <Text style={styles.titleStyle}>
                        {name}                        
                    </Text>

                </PageSection>

                <PageSection>
                    <Text style={styles.titleStyle}>
                        {calories}
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