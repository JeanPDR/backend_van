import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Login/LoginScreen';
import Login from './src/pages/Login/HomeScreen'
import Type from './src/pages/Steps/type';
import HomeScreen from './src/pages/Login/HomeScreen';
import Car from './src/pages/Steps/car';
import User from './src/pages/Steps/user';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Escolha sua função" component={Type} />
        <Stack.Screen 
           options={{headerShown:false}}
           name="Car" 
           component={Car} 
           />
        <Stack.Screen 
           options={{headerShown:false}}
           name="User" 
           component={User} 
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
