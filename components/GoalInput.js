import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const GoalInput = ({ handleAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const { inputSection, input } = styles

  const handleGoalInput = (text) => {
    setEnteredGoal(text)
  }
  return (
    <View style={inputSection}>
      <TextInput
         placeholder='Course Goal'
         style={input}
         onChangeText={handleGoalInput}
         value={enteredGoal}
      />
    <Button title='add' onPress={() => handleAddGoal(enteredGoal)} />
    </View>

  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

export default GoalInput
