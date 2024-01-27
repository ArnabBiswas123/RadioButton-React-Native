import React, { Component } from 'react'
import { View,Text } from 'react-native'

export default class Userdata extends Component {
  render() {
    return (
      <View>
        <Text>Name= {this.props.name}</Text>
      </View>
    )
  }
}
