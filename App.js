import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const { container, inputSection, input, listItem } = styles

  const handleAddGoal = (enteredGoal) => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ])
    setIsVisible(!isVisible)
  }

  const handleDelete = (id) => {
    console.log('id', id)
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  const handleOpenModal = () => {
    setIsVisible(!isVisible)
  }

  const handleCancelModal = () => {
    setIsVisible(!isVisible)
  }
  return (
    <View style={container}>
      <Button title='Add New Goal' onPress={handleOpenModal}/>
    <GoalInput
      handleAddGoal={handleAddGoal}
      isVisible={isVisible}
      handleCancelModal={handleCancelModal}
    />
      <FlatList
        data={courseGoals}
        renderItem={x => (
          <GoalItem item={x.item} handleDelete={handleDelete}/>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
  }
});
