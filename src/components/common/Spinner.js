import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            {/* the ActivityIndicator component has an option called size which 
            can be either large or small, size is a reserved word for ActivityIndicator
            but we are giving it a value of a prop named size (which we could name whatever want) */}
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }