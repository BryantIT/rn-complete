import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const GoalItem = ({ item }) => {
  const { listItem } = styles
  return (
    <View style={listItem}>
      <Text>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ADD8E6',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 3
  }
})

export default GoalItem
