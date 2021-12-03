import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createSwitchNavigator, createAppContainer } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import ThemeContextProvider from './comp/ThemeContext.js';
import AboutScreen from './comp/aboutPage.js';
import LoginScreen from './comp/LoginPage.js';
import DirectoryScreen from './comp/DirectoryPageTabs.js';
import HarmScreen from './comp/CreateHarm.js';

import RecordScreen from './comp/RecordingPage.js';
import LibraryScreen from './comp/LibraryPage.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Directory" component={DirectoryScreen}/>
        <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Create" component={HarmScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;
