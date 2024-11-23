import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Platform } from 'react-native';

// Ensure the image path is correct
const bondgologo = require('./assets/bondgologo.png');

export default function App() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={bondgologo}
            style={styles.headerImg}
          />
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>We are here to build up Family Bond</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              value={form.username}
              onChangeText={(username) => setForm({ ...form, username })}
              style={styles.textInput}
              placeholder="Enter your username"
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eBecf4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 36,
    alignItems: 'center',
  },
  headerImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
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
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
  },
});
