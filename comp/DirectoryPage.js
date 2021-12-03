import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Directory({ navigation }) {
  return (
    <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2021/05/01/21/13/couple-6222077_1280.jpg'}} resizeMode="cover" style={styles.image}>

      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

});
