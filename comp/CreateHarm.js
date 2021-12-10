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
  const [trackNum, setTrackNum] = useState();
  console.log('reloadcreateHArmonizer');

  var count = 0;

  const [playerURI, setPlayerURI] = useState(''); // on the player
  const [originalURI, setOriginal] = useState(''); // original audio

  const [audioFile, setAudioFile] = useState();

  useEffect(() => {
    getURI();
    console.log("harmonizer useEffect triggered");
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
        const trackNum = await AsyncStorage.getItem('NUM');
        setTrackNum(trackNum);
      }
    } catch (error) {
      console.log("couldn't get uri");
      console.log(error);
    }
  };

  console.log("COUNT: " + count);





  //============================================================================

  const [delay, setDelay] = useState(false);

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

  async function callPlay(){
    try {
      await loadSound();
      playSound(dogBarkingBuffer);
      playSound2(catMeowBuffer);
      playSound3(meatBuffer);
      playSound4(treeBuffer);
    } catch (err) {
      console.log(err);
    }
  }

  function playSound(buffer) {
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 1;
    source.connect(audioContext.destination);
    source.start(0);
}

function playSound2(buffer) {
  let val = 1;
  if (delay === false) {
    val = .8;
  }
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 400;
  source.playbackRate.value = val;
  source.connect(audioContext.destination);
  source.start(0);
}

function playSound3(buffer) {
  let val = 1;
  if (delay === false) {
    val = .67;
  }
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 700;
  source.playbackRate.value = val;
  source.connect(audioContext.destination);
  source.start(0);
}

function playSound4(buffer) {
  let val = 1;
  if (delay === false) {
    val = .5;
  }
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.detune.value = 1100;
  source.playbackRate.value = val;
  source.connect(audioContext.destination);
  source.start(0);
}

function changeDelay() {
  setDelay(!delay);
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bigContainer}>
        <View style={styles.cdPlayer}>
          <Text>Player</Text>
          <View style={styles.trackView}>
            <View style={styles.trackContainers}>
              <View style={styles.prevNextTrack}>
                <Text style={{textAlign: 'center'}}>
                  Prev: {trackNum -1}
                </Text>
              </View>
            </View>
            <View style={styles.currentTrack}>
              <Text style={{fontSize: 50}}>Track: {trackNum}</Text>
            </View>
            <View style={styles.trackContainers}>
              <View style={styles.prevNextTrack}>
                <Text style={{textAlign: 'center'}}>
                  Next: {trackNum +1}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.controls}>
          <View style={styles.playPauseContainer}>
            <TouchableOpacity
              style={playing ? styles.pauseSymbol : styles.triangleRight}
              onPress={playing ? stopPlaying : playRecordedAudio }
            >
            </TouchableOpacity>
          </View>
          <View style={{width: 10}}></View>
          <Button title="Harmonized" color="black" onPress={() => callPlay()}/>
        </View>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => changeDelay()}>
            <Text style={delay ? styles.selected : styles.unselected}>Space Harmony</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeDelay()}>
            <Text style={delay ? styles.unselected : styles.selected}>Delayed Harmony</Text>
          </TouchableOpacity>
        </View>
        <Button title="Pick Another Sound" color='black' onPress={() => navigation.goBack()}></Button>
      </View>
    </SafeAreaView>
  );
}
