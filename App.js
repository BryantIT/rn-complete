import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const { container, inputSection, input, listItem } = styles

  const handleAddGoal = (enteredGoal) => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ])
  }
  return (
    <View style={container}>
      <GoalInput handleAddGoal={handleAddGoal} />
      <FlatList
        data={courseGoals}
        renderItem={x => (
          <GoalItem item={x.item.value}/>
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
