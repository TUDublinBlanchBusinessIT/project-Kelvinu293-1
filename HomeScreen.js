import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';

// Example tiles for the springboard
const SPRINGBOARD_ITEMS = [
  { id: '1', label: 'Profile', action: () => console.log('Go to Profile') },
  { id: '2', label: 'Settings', action: () => console.log('Go to Settings') },
  { id: '3', label: 'Messages', action: () => console.log('Go to Messages') },
  { id: '4', label: 'Logout', action: () => console.log('Log Out') },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.tile} onPress={item.action}>
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
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  grid: {
    width: '100%',
    justifyContent: 'center',
  },
  tile: {
    flex: 1,
    margin: 10,
    height: Dimensions.get('window').width / 3 - 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
