import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const SPRINGBOARD_ITEMS = [
  { id: '1', label: 'Progress', screen: 'Progress' },
  { id: '2', label: 'Live Activity', screen: 'LiveActivity' },
  { id: '3', label: 'Review', screen: 'Review' },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => navigation.navigate(item.screen)}
    >
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
    height: 100, // Adjust tile height
    maxWidth: '45%', // Ensure it fits smaller screens
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  tileText: {
    color: '#fff',
    fontSize: 14, // Smaller font size for text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
