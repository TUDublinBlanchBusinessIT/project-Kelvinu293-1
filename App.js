import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/bondgologo.png')}
            style={styles.headerImg}
          />
          <Text style={styles.title}>Sign in</Text>

          <Text style={styles.subtitle}>
            We here to build up Family Bond
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eBecf4',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'green',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15, 
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center'
  }
});

