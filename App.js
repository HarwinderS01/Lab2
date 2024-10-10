import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ToDoList from './TodoList'; // Update import to match file name

import ToDoForm from './ToDoForm';  // Import ToDoForm component

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Hello World!</Text>
      <ToDoList />  {/* Render ToDoList */}
      <ToDoForm />  {/* Render ToDoForm */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
