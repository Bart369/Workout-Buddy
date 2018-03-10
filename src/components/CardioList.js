import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchCardio } from '../actions'

class CardioList extends Component {

    componentWillMount(){
        this.props.fetchCardio()
    }


    render(){
        return (
            <Text>yolo</Text>
        )
    }
}

// const mapStateToProps = (state) => {
//     const cardioWorkouts = _.map(state.cardioForm, (val,uid)  => {
//         return { ... val, uid}
//     })
// }

export default connect(null, { fetchCardio }) (CardioList)