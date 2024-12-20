import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import LiveactivtyScreen from './LiveactivityScreen';
import ProgressScreen from './ProgressScreen';
import ReviewScreen from './ReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ title: '' }}
        />
         <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="LiveActivity" 
          component={LiveactivtyScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Progress" 
          component={ProgressScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Review" 
          component={ReviewScreen} 
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
