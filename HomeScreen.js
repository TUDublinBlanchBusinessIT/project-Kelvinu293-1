import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const SPRINGBOARD_ITEMS = [
  { id: '1', label: 'Progress', screen: 'Progress', image: require('./target.png') },
  { id: '2', label: 'Live Activity', screen: 'LiveActivity', image: require('./family.png') },
  { id: '3', label: 'Review', screen: 'Review', image: require('./review.png') },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={item.image} style={styles.tileImage} />
      <Text style={styles.tileText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={SPRINGBOARD_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Dynamic grid
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  tile: {
    flex: 1,
    margin: 8,
    padding: 10,
    height: 140, // Adjusted height to fit image and text
    maxWidth: '45%', // Ensure it fits smaller screens
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  tileImage: {
    width: 50, // Adjusted size for the images
    height: 50,
    marginBottom: 8, // Space between image and text
  },
  tileText: {
    color: '#fff',
    fontSize: 14, // Smaller font size for text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
