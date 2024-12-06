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
    justifyContent: 'center',
  },
  tile: {
    flex: 1,
    margin: 8,
    padding: 10,
    height: 270, // Square dimensions
    width: 100,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, // Slightly rounded corners
  },
  tileImage: {
    width: 80, // Larger image size for emphasis
    height: 80,
    marginBottom: 8, // Space between image and text
    resizeMode: 'contain',
  },
  tileText: {
    color: '#fff',
    fontSize: 16, // Larger font size for text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

