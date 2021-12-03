import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Button, TextInput, Image, ImageBackground} from 'react-native';

export default function PlayPauseButton() {
  const [playPause, setPlayPause] = useState(true);

  function play() {
    if (playPause === true) {
      setPlayPause(false);
    }
    else {
      setPlayPause(true);
    }
  }

  return (
    <View style={styles.playPauseContainer}>
      <TouchableOpacity style={[playPause ? styles.triangleRight : styles.pauseSymbol]} onPress={play}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  playPauseContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  triangleRight: {
  width: 0,
  height: 0,
  borderLeftWidth: 10,
  borderRightWidth: 10,
  borderBottomWidth: 30,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'red',
  transform: [{rotate: '90deg'}],
  },
  pauseSymbol: {
    width: 20,
    height: 25,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRightWidth: 5,
    borderLeftWidth: 5,
  }
});
