import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './todolist';
import ToDoForm from './todoform';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
