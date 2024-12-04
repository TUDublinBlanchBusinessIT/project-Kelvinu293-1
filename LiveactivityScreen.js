import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LiveactivityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Activity Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}