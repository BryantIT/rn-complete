import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = ({ handleAddGoal, isVisible, handleCancelModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const { inputSection, input, buttonContainer, button } = styles

  const handleGoalInput = (text) => {
    setEnteredGoal(text)
  }

  const handleGoalAdded = () => {
    handleAddGoal(enteredGoal)
    setEnteredGoal('')
  }
  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={inputSection}>
        <TextInput
           placeholder='Course Goal'
           style={input}
           onChangeText={handleGoalInput}
           value={enteredGoal}
        />
      <View style={buttonContainer}>
        <View style={button}>
          <Button title='add' onPress={handleGoalAdded} />
      </View>
        <View style={button}>
          <Button title='cancel' color='red' onPress={handleCancelModal}/>
        </View>
      </View>
      </View>
    </Modal>

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    paddingTop: 10
  },
  button: {
    width: '40%'
  }
})

export default GoalInput
