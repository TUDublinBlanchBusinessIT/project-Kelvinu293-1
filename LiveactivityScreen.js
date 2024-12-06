import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Ima = require("./camping.png");
const pic = require("./concert.png");

export default function LiveactivityScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Activity Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      </TouchableOpacity>
      <Image source={Ima} style={{ width: 300, height: 300 }} />
      <Text>Come to camp in the wild fire</Text>
      <Image source={pic} style={{ width: 300, height: 300 }} />
      <Text>The boys rocker is playing this week in george pub, come through with the family</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
