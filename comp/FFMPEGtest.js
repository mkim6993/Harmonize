import React, { useContext, useState, useEffect } from 'react';
import {  Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';

//Create ffmpeg instance and set 'log' to true so we can see everything
//it does in the console
// const ffmpeg = createFFmpeg({ log: true });
//
// const AudioEditor = ({navigation}) => {
//     const [uri, setUri] = useState('');
//     const load = async () => {
//         setReady(true);
//     }
//
//     useEffect(() => {
//         _retrieveData();
//     }, []);
//
//
//
//     const _retrieveData = async () => {
//       try {
//         const value = await AsyncStorage.getItem('URI');
//         if (value !== null) {
//           // We have data!!
//           console.log(value);
//           setUri(value);
//         }
//       } catch (error) {
//         // Error retrieving data
//       }
//     };
//
//     function convert() {
//
//     }
//
//     return (
//       <View>
//         <Text>uri = {uri}</Text>
//         <Button title="run ffmpeg" onPress={convert}/>
//       </View>
//     );
// }
//
// export default AudioEditor;
