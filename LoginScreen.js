import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const bondgologo = require('./bondgologo.png');

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSignIn = () => {
    console.log('Sign In', form);
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={bondgologo} style={styles.headerImg} />
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>We are here to build up Family Bond</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
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
              placeholder="************"
              secureTextEntry
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Login In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>Sign Up Here</Text>
            </Text>
          </TouchableOpacity>
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
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: 'green',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'purple',
  },
});
