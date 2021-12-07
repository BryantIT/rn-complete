import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({ item, handleDelete }) => {
  const { listItem } = styles
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => handleDelete(item.id)}>
      <View style={listItem} >
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
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
