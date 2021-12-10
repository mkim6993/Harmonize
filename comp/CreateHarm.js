import * as React from 'react';

import { Text, View, StyleSheet, SafeAreaView, Button, ImageBackground, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import styles from './styling/createHarmPageStyle.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useRef, useEffect } from 'react';
//import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';

export default function App({ navigation }) {

  // references for the Audio
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());

  // states for the UI
  const [playing, setPlaying] = useState(false);
  const [disablePlay, setDisPlay] = useState(false);
  const [ogOrNew, setOr] = useState(false); // og = false, new = true
  console.log('reloadcreateHArmonizer');

  var count = 0;

  const [playerURI, setPlayerURI] = useState(''); // on the player
  const [originalURI, setOriginal] = useState(''); // original audio
  const [modifiedURI, setModified] = useState(''); // modified audio

  const [audioFile, setAudioFile] = useState();

  const [effect, setEffect] = useState(false);

  useEffect(() => {
    getURI();
    console.log("useEffect triggered");
  }, []);

  //function to play the recorded audio
  const playRecordedAudio = async () => {
    console.log("about to load: " + playerURI);
    try {
      // load the uri
      await AudioPlayer.current.loadAsync({ uri: playerURI }, {}, true);

      //get player status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      //Play if audio is loaded successfully
      if (playerStatus.isLoaded) {
        if (playerStatus.isPlaying === false) {
          console.log(AudioPlayer.current);
          AudioPlayer.current.playAsync();
          setPlaying(true);
        }
      }
    }
    catch (error) {
      console.log("PLAYERROR");
      console.log(error);
    }
  };

  // stop the playing audio
  const stopPlaying = async () => {
    try {
      //get player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      //if song is playing stopPlaying
      if (playerStatus.isLoaded === true) await AudioPlayer.current.unloadAsync();

      setPlaying(false);
    }
    catch (error) {
      console.log("STOPPLAYING ERROR");
      console.log(error);
    }
  };

  /*
  --------------------------Server side---------------------------------
  */

  // saving URI to local storage
  const getURI = async () => {
    try {
      if (count === 0) {
        count++;
        const uri = await AsyncStorage.getItem('URI');
        if (uri !== null) {
          console.log("URI: " + uri)
          setOriginal(uri);
          setPlayerURI(uri);

        }
      }
    } catch (error) {
      console.log("couldn't get uri");
      console.log(error);
    }
  };

  // uri -> file
  const getFile = async () => {
    try {
      let file = await fetch(originalURI)
        .then(r => r.blob())
          .then(blobFile => new File([blobFile], "audioBro", {type: "audio/webm"}));
      console.log(file);
      const objectURL = URL.createObjectURL(file);
      console.log("objectURL: " + objectURL);
      setPlayerURI(objectURL);
      setAudioFile(file);
    } catch (error) {
      console.log(error);
    }

    try {
      let file2 = await fetch('../music/HarvestMoon.m4a')
        .then(x => x.blob())
          .then(blobFile2 => new File([blobFile2], "harvest", {type: "audio/m4a"}));
      console.log(file2);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("COUNT: " + count);





  //============================================================================
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  const audioContext = new AudioContext();

  var dogBarkingBuffer = null;
  var catMeowBuffer = null;
  var meatBuffer = null;
  var treeBuffer = null;

  function loadSound() {
    var request = new XMLHttpRequest();
    request.open('GET', playerURI, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      audioContext.decodeAudioData(request.response, function(buffer) {
        dogBarkingBuffer = buffer;
        catMeowBuffer = buffer;
        meatBuffer = buffer;
        treeBuffer = buffer;
      },);
    }
    request.send();
  }

  function callPlay(){
    playSound(dogBarkingBuffer);
    playSound2(catMeowBuffer);
    playSound3(meatBuffer);
    // playSound4(treeBuffer);
  }

  function playSound(buffer) {
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 1;
    source.connect(audioContext.destination);
    source.start(0);
}

function playSound2(buffer) {
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 400;
  source.playbackRate.value = .8;
  source.connect(audioContext.destination);
  source.start(0);
}

function playSound3(buffer) {
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 700;
  source.playbackRate.value = .67;
  source.connect(audioContext.destination);
  source.start(0);
}

function playSound4(buffer) {
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 1100;
  source.playbackRate.value = .5;
  source.connect(audioContext.destination);
  source.start(0);
}



  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2021/05/01/21/13/couple-6222077_1280.jpg'}} resizeMode="cover" style={styles.image}>
        <View style={styles.bigContainer}>
          <View style={styles.controls}>
            <View style={styles.playPauseContainer}>
              <TouchableOpacity
                style={playing ? styles.pauseSymbol : styles.triangleRight}
                onPress={playing ? stopPlaying : playRecordedAudio }
              >
              </TouchableOpacity>

              <TouchableOpacity
                style={playing ? styles.pauseSymbol : styles.triangleRight}
                onPress={playing ? stopPlaying : playRecordedAudio }
              >
              </TouchableOpacity>
            </View>
            <Button title="MAGIC" color="red" onPress={() => getFile()}/>
            <Button title="WEB AUDIO" color="red" onPress={() => loadSound()}/>
            <Button title="play WEB" color="red" onPress={() => callPlay()}/>
          </View>
          <Button title="Back" onPress={() => navigation.goBack()}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
