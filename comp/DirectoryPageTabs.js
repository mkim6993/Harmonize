import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground} from 'react-native';
import AboutScreen from './aboutPage.js';
import LoginScreen from './LoginPage.js';
import LibraryScreen from './LibraryPage.js';
import RecordingScreen from './RecordingPage.js';


const Tab = createBottomTabNavigator();

export default function DirectoryTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Tab.Screen name="Record" component={RecordingScreen}/>
      <Tab.Screen name="Library" component={LibraryScreen}/>


    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

});
