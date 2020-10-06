import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TaskList from './src/screens/TaskList'
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (<TaskList/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
