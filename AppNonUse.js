import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createSwitchNavigator, createAppContainer } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-community/async-storage';
// import TestPageScreen from './comp/TestPage.js';
// import MathScreen from './comp/MathExercises.js';
import { AsyncStorage } from 'react-native';
import LoginScreen from './comp/AsyncPrac.js';
import AboutScreen from './comp/aboutPage.js';
import PostScreen from './comp/PostPage.js';
// import MusicPlayerScreen from './comp/MusicPlayer.js';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Image style={{width: 250, height: 250}} source={{uri: 'https://cdn.pixabay.com/photo/2017/11/10/05/34/play-2935460_1280.png'}}/>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button
//         title="Go to TestPage"
//         onPress={() => navigation.push('TestPage')}
//       />
//       <Button
//         title="Go to Math"
//         onPress={() => navigation.push('MathPage')}
//       />
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.push('LoginPage')}
//       />
//       <Button
//         title="About"
//         onPress={() => navigation.push('About')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.loginScreenContainer}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details...again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button
//         title="Go Back"
//         onPress={() => navigation.goBack()}
//       />
//       <Button
//         title="Go Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//       <Button
//         title="Go Home with another method"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

// const AuthStack = createNativeStackNavigator();
//
// class AuthLoadingScreen extends Component {
//   constructor(props) {
//     this._loadData();
//   }
//   render(){
//     return(
//       <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
//         <ActivityIndicator/>
//         <StatusBar barStyle="default"/>
//       </View>
//     );
//   }
//
// _loadData = async() => {
//   const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//   this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
//   }
// }
//
// createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: Stack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading'
//   }
// ));

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginScreen}/>
        <Stack.Screen name="PostPage" component={PostScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
// /*
// <Stack.Screen name="Home" component={HomeScreen}/>
// <Stack.Screen name="Details" component={DetailsScreen}/>
// <Stack.Screen name="TestPage" component={TestPageScreen}/>
// <Stack.Screen name="MathPage" component={MathScreen}/>
// */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
