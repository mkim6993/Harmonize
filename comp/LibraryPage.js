import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Button, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styling/recordPageStyle.js';
import { useState } from 'react';
import { Audio } from 'expo-av';

const tracks = [
  {
    id: 0,
    title: 'Part Time Lover',
    track: require('../music/partTimeLover.mp3'),
  },
  {
    id: 1,
    title: 'Land of La La',
    track: require('../music/LandofLaLa.m4a'),
  },
  {
    id: 2,
    title: 'Harvest Moon',
    track: require('../music/HarvestMoon.m4a'),
  },
  {
    id: 3,
    title: 'Loves In Need of Love Today',
    track: require('../music/LovesInNeedofLoveToday.m4a'),
  },
]

export default function RecordIt({ navigation}) {
  //const [sound, setSound] = React.useState();
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [CurrentSong, SetCurrentSong] = React.useState(tracks[0]);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
  LoadAudio();
    return () => Unload();
  }, [CurrentSong]);


  const Unload = async () => {
    await sound.current.unloadAsync();
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PauseAudio = async () => {
  try {
    const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LoadAudio = async () => {
    SetLoaded(false);
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          CurrentSong.track,
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          PlayAudio();
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  // Button controls and dynamic changes
  const [playPause, setPlayPause] = useState();
  const [stopRec, setStopRec] = useState(true);
  const [rec, setRec] = useState('|Record|');
  const [playDis, setPlayDis] = useState(false);

  const play = async () => {
    if (playPause === true) {
      console.log("play was pressed");
      setPlayPause(false);
      setPlayDis(true);
      PlayAudio();
    }
    else {
      console.log("pause was pressed");
      setPlayPause(true);
      setPlayDis(false);
      PauseAudio();
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

  function changeSong(id){
    console.log("id of selected track: "+id);
    SetCurrentSong(tracks[id]);
    setPlayPause(false);
  }

  //for flatlist items
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => changeSong(item['id'])} disabled={playDis}>
        <Text style={{fontSize: 20}}>{item['title']}</Text>
     </TouchableOpacity>
  )}

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2021/05/01/21/13/couple-6222077_1280.jpg'}} resizeMode="cover" style={styles.image}>
        <View style={styles.bigContainer}>
          <View styles={styles.tracks}>
          {(
              <FlatList
                data={ tracks }
                renderItem={ renderItem }
                keyExtractor={ item => item.id.toString()}
              />
          )}
          </View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => recordOrStop()} style={[stopRec ? styles.recordButton : styles.recordButtonRed]}><Text>{rec}</Text></TouchableOpacity>
            <View style={styles.playPauseContainer}>
              <TouchableOpacity style={[playPause ? styles.triangleRight : styles.pauseSymbol]} onPress={() => play()}></TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
