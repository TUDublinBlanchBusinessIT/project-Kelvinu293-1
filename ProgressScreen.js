import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Ensure this package is installed

// Get the screen width dynamically
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ProgressScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Screen</Text>
      <ProgressBar
        progress={0.5}
        color="yellow"
        style={styles.progressBar}
      />
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
    fontSize: 26, // Slightly larger for iPhone 14
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  progressBar: {
    width: SCREEN_WIDTH * 0.8, // Progress bar takes up 80% of screen width
    height: 20, // Slimmer progress bar
    borderRadius: 10,
    marginVertical: 20,
  },
});







