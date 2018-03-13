import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchCardio } from '../actions'
import ListItem from './ListItem'

class CardioList extends Component {

    componentWillMount(){
        this.props.fetchCardio()
    }

    renderItem({ item }) {
        console.log({ item })
        return <ListItem cardio={item} />
    }

    // FlatList component is an easy way to make an efficient scrolling list of data.
    // There are two primary props you need to know about in a FlatList and that’s data 
    // and renderItem.The first is an array of data used to create the list, typically 
    // an array of objects, and the second is the function that will take an individual 
    // element of the data array and render a component for it.

    render(){
        // console.log(this.props)
        return (
            <FlatList
                data={this.props.cardioWorkouts}
                keyExtractor={this.props.cardioWorkouts.uid}
                renderItem={this.renderItem}
                
            />
        )
    }
}

const mapStateToProps = (state) => {
    const cardioWorkouts = _.map(state.cardio, (val,uid)  => {
        return { ...val, uid} 
        // this creates a new object for each object in state.cardio with the properties of name,carlories, etc
        // all this comes from (val) and adds a new property of id (thus the uid (unique id)) 
        // all those objects are collected and put in to an array beause of  lodash and map
    })

    return { cardioWorkouts }

}

    // we get an object that looks like the below:

    // Object {
    //   "cardioWorkouts": Array [
    //                         Object {
    //                             "calories": "100",
    //                             "date": "",
    //                             "distance": "0",
    //                             "duration": "60",
    //                             "name": "First test no dates",
    //                             "uid": "-L6yudjI9dVrbFEuRavt",
    //                         },
    //                         Object {
    //                             "calories": "100",
    //                             "date": "",
    //                             "distance": "0",
    //                             "duration": "60",
    //                             "name": "Second test no dates",
    //                             "uid": "-L6yufMHZpFqGHajIIC7",  
    //                         }
    //                     ]
    // }

export default connect(mapStateToProps, { fetchCardio }) (CardioList)