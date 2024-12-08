import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

//importing the images
const Ima = require("./camping.png");
const pic = require("./concert.png");
const bow = require("./bowling.png");
const cas = require("./castle.png");
const zoo = require("./zoo.png");


export default function LiveactivityScreen({ navigation }) {
  return (
    //Scroll down 
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Activity Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      </TouchableOpacity>
      <Image source={Ima} style={{ width: 350, height: 300 }} />
      <Text>Come to camp in the wild fire</Text>
      <Image source={pic} style={{ width: 350, height: 300 }} />
      <Text>The boys rocker is playing this week in george pub, come through with the family</Text>
      <Image source={bow} style={{ width: 350, height: 300 }} />
      <Text>Come bowling in Blanchardstwon Leisureplex</Text>
      <Image source={cas} style={{ width: 350, height: 300 }} />
      <Text>Visit Castle Night in 30th April</Text>
      <Image source={zoo} style={{ width: 350, height: 200 }} />
      <Text>30% off as Family in Dublin Zoo until August 15th</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'yellow'
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
