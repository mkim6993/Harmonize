import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styling/recorderPageStyle.js';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function RecordIt({ navigation}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../music/partTimeLover.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  // Button controls and dynamic changes
  const [playPause, setPlayPause] = useState(true);
  const [stopRec, setStopRec] = useState(true);
  const [rec, setRec] = useState('|Record|');

  function play() {
    if (playPause === true) {
      setPlayPause(false);
      playSound();
    }
    else {
      setPlayPause(true);
    }
  }

  function recordOrStop(){
    if (stopRec){
      setStopRec(false);
      setRec('| Stop |');
    }
    else{
      setStopRec(true);
      setRec('|Record|');
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2021/05/01/21/13/couple-6222077_1280.jpg'}} resizeMode="cover" style={styles.image}>
        <View style={styles.bigContainer}>
          <Text>hello</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={recordOrStop} style={[stopRec ? styles.recordButton : styles.recordButtonRed]}>{rec}</TouchableOpacity>
            <View style={styles.playPauseContainer}>
              <TouchableOpacity style={[playPause ? styles.triangleRight : styles.pauseSymbol]} onPress={play}></TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
