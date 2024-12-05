import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Ensure this package is installed

export default function ProgressScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Screen</Text>
      <ProgressBar progress={0.5} color="yellow" style={styles.progressBar} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginVertical: 20,
  },

});






