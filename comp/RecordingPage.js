import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, ImageBackground, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import styles from './styling/recordPageStyle.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useRef, useEffect } from 'react';

//import ReactNativeBlobUtil from 'react-native-blob-util';

export default function App({ navigation }) {

  // references for the Audio
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());

  // states for the UI
  const [audioPermission, setAudioPermission] = useState(false);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [items, setItems] = useState([]);
  console.log('reloaded');

  const[currentAudio, setCurrent] = useState('');
  const[currentURI, setCurrentURI] = useState('');


  // initial load to get the audio permission
  useEffect(() => {
    GetPermission();
    console.log("useEffect triggered");
  }, []);

  // getting audio permission
  const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    setAudioPermission(getAudioPerm.granted);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
  };

  // start Recording
  const startRecording = async () => {
    try {
      if (audioPermission === true) {
        try {
          await AudioRecorder.current.prepareToRecordAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );

          //start the recording
          await AudioRecorder.current.startAsync();
          setRecording(true);
        }
        catch (error) {
          console.log(error);
        }
      }
      else {
        GetPermission();
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const stopRecording = async () => {
    try {
      // stop the Recording
      await AudioRecorder.current.stopAndUnloadAsync();

      //get the uri
      const result = AudioRecorder.current.getURI();
      if (result) setCurrentURI(result);
      console.log("AUDIO_RECORDER: " + JSON.stringify(AudioRecorder.current));

      pushItem(result);


      // reset the audio recorder
      AudioRecorder.current = new Audio.Recording();
      setRecording(false);

    }
    catch (error) {
      console.log(error);
    }
  };

  // pushing new recording to array
  function pushItem(uri) {
    console.log('ready to push');
    setItems([... items, {
      id: items.length,
      uri: uri
    }]);
    console.log('just finished inserting new item to array');
    console.log('new uri added');
    console.log(items);
    console.log("items length: " + items.length)
    setCurrent(items.length);
  }


  //function to play the recorded audio
  const playRecordedAudio = async () => {
    try {
      // load the uri
      //alert("currentURI before await: " + currentURI);
      await AudioPlayer.current.loadAsync(currentURI, {}, true);

      //get player status
      const playerStatus = await AudioPlayer.current.getStatusAsync();
      // const dirInfo = await FileSystem.getInfoAsync(currentURI);
      // console.log("getInfoAsync: " + dirInfo);

      //Play if audio is loaded successfully
      if (playerStatus.isLoaded) {
        //console.log("AUDIO_PLAYER: " + JSON.stringify(AudioPlayer.current));
        if (playerStatus.isPlaying === false) {
          AudioPlayer.current.playAsync();
          setPlaying(true);
        }
      }
    }
    //   console.log('Loading Sound');
    //   const { sound } = await Audio.Sound.createAsync(
    //      require(item[index])
    //   );
    //   setSound(sound);
    //
    //   console.log('Playing Sound');
    //   await sound.playAsync();
    // }

    catch (error) {
      console.log(error);
    }
  };

  // const fetchCall = () => {
  //   ReactNativeBlobUtil.config({
  //     fileCache: true,
  //   })
  //     .fetch('GET', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Change-5.png')
  //     .then((res) => {
  //       // the temp file path
  //       console.log('The file saved to ', res.path());
  //     });
  // };

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
      console.log(error);
    }
  };

  // debugging purposes
  function printItems() {
    console.log("items length: " + items.length);
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  }

  async function preparePlay(item) {
    await setCurrent(item['id']);
    await setCurrentURI(item['uri']);
  }

  /*
  --------------------------Server side---------------------------------
  */

  // collection for recorded data
  // let data = [];

  // saving URI to local storage
  const saveToLocal = async () => {
    try {
      await AsyncStorage.setItem(
        'URI',
        currentURI
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const sendAudioFile = file => {
  //   const formData = new FormData();
  //   formData.append('audio-file', file);
  //   return fetch('http://localhost:19006', {
  //     method: 'POST',
  //     body: formData
  //   });
  // };
  //
  // const createFile = () => {
  //   const blob = new Blob(data, {
  //     'type' : 'audio/webm'
  //   });
  //   sendAudioFile(blob);
  // }
  //
  // const getFile = async () => {
  //   let result = await fetch(currentURI);
  //   console.log("result: " + result);
  //   console.log("result pushed to data");
  //   data.push(result);
  //   createFile()
  // }

  // function downloadURI(uri, name) {
  //   var link = document.createElement("a");
  //   link.download = name;
  //   link.href = uri;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   //delete link;
  // }

  const renderItem = ({item}) => {
    //setCurrent(item['id']);
    return (
      <TouchableOpacity style={styles.audioItem}>
        <Text style={{fontSize: 20, color: 'white'}} onPress={() => {preparePlay(item);}}>Track {item['id']}</Text>
     </TouchableOpacity>
  )}

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bigContainer}>
        <Button
            title={"Print Items"}
            color={recording ? "red" : "green"}
            onPress={printItems}
        />


        <Text>Player: Track {currentAudio} </Text>
        <Text>playing? {playing}</Text>
        <Text>currentURI? {currentURI}</Text>

        <View style={styles.trackAndControls}>
          <View style={styles.controls}>
            <View style={styles.playPauseContainer}>
              <TouchableOpacity
                  style={playing ? styles.pauseSymbol : styles.triangleRight}
                  onPress={playing ? stopPlaying : playRecordedAudio }>
              </TouchableOpacity>
            </View>
            <Button
                title={recording ? "Stop" : "Record"}
                color={recording ? "red" : "green"}
                onPress={recording ? stopRecording : startRecording}
            />
            <Button
                title="Save"
                color="green"
                onPress={() => {saveToLocal(); navigation.push('Create')}}
            />
          </View>
          <View style={styles.itemView}>
              <FlatList
                  data={items}
                  renderItem={renderItem}
              />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
