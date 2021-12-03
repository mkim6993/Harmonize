import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

const player = new Audio.Sound();

useEffect(() => {

  async function loadSound() {
    // Load the sound
    await player.loadAsync({uri: 'http://localhost:19006/091eaf23-4478-4dac-bf9b-739605d4df5d'});
  }

  async function unloadSound() {
    // cleanup
    await player.unloadAsync()
  }

  loadSound();

  return(() => {
    unloadSound()
  })
}, [])

async function onPlay() {

  try {

    await player.playAsync();
    console.log(' Your sound is playing!')

  } catch (error) {
    // An error occurred!
    console.log(error)
  }
}


async function onStop() {

  console.log('stop')
  await player.stopAsync();
}


  return (
    <>
    <View style={styles.container}>
      <Button title="Play Sound" onPress={onPlay} />
    </View>
        <View style={styles.container}>
      <Button title="Stop Sound" onPress={onStop} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
