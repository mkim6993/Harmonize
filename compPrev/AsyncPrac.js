import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';


const userInfo = {username: 'duck123', password: 'happyDuck'}

export default class AsyncPrac extends Component {
  state = {
    username: '',
    password: '',
  }

  // constructor(props) {
  //   super(props);
  //   this.getData();
  // }

  onLogin = async () => {
    try {
      await AsyncStorage.setItem('username', this.state.username);
      await AsyncStorage.setItem('password', this.state.password);
      if(userInfo.username === this.state.username && userInfo.password === this.state.password){
        this.state.errorM = '';
        this.forceUpdate();
        alert("it worked");
        this.props.navigation.navigate('PostPage');
      }
      else {
        this.state.errorM = 'The username you entered doesn\'t belong to an account. Please check your username and try again.';
        this.forceUpdate();
        alert("didnt worked");
      }
    } catch(err){
      console.log(err);
      alert("error");
    }
  }

  // getData = async () => {
  //   try {
  //     const username = await AsyncStorage.getItem('username');
  //     if (username !== null) {
  //       this.setState({ username });
  //     }
  //
  //     const password = await AsyncStorage.getItem('password');
  //     if (password !== null) {
  //       this.setState({ password });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    return (


      <View style={styles.outerContainer}>
        <View style={{ alignItems: 'center', backgroundColor: 'white', marginRight: 20, padding: 3}}>
          <View style={{alignItems: 'center', backgroundColor: 'white', margin: 8, padding: 10, borderRadius: 5, borderWidth: 2, borderStyle: 'dotted'}}>
            <Text style={{fontFamily: 'Monaco', fontSize: 15, marginTop: 5}}>Demo Key</Text>
            <Text style={{fontFamily: 'Monaco', fontSize: 10}}>{'\n'}Username: duck123 {'\n'}Password: happyDuck</Text>
          </View>
        </View>


        <Image
              style={{width: 300, height: 600}}
              source={{uri: 'https://cdn.pixabay.com/photo/2019/03/23/19/57/smartphone-4076145_1280.png'}}/>


        <View style={styles.contentContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.header}>TalkLive</Text>
            <Text>{ this.state.username }</Text>
            <View style={styles.inputContainer}>
              <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        onChangeText={val => this.setState({ username: val })}
                        value={this.state.username}
                        autoCapitalize="none"/>
              <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={val => this.setState({ password: val })}
                        value={this.state.password}/>
              <View style={{margin: 6, width: 350}}>
                <Button title="Login" onPress={this.onLogin}/>
              </View>
            </View>
            <View style={{height: 1, backgroundColor: '#B4B4B4', marginTop: 20, marginBottom: 20, width: 350}}></View>
            <Text style={{fontFamily: 'Monaco', fontSize: 15, color: 'red', width: 310, textAlign: 'center', marginBottom: 15}}>{this.state.errorM}</Text>
            <Text style={{fontFamily: 'Monaco', fontSize: 15}}>Forgot password?</Text>
          </View>


          <View style={styles.loginContainer}>
            <Text style={{fontFamily: 'Monaco', fontSize: 15, marginBottom: 10}}>Don't have an account?</Text>
            <View style={{margin: 6, width: 350}}>
              <Button title="Sign Up"/>
            </View>
            <View style={{margin: 6, width: 350}}>
              <Button title="About" onPress={() => this.props.navigation.push('About')}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5C578',
    flexDirection: 'row',
   },
   contentContainer: {
     flexDirection: 'column',
     marginLeft: 20,
   },
   loginContainer: {
     backgroundColor: '#F7E8D0',
     justifyContent: 'center',
     alignItems: 'center',
     padding: 20,
     borderRadius: 30,
     margin: 8,
   },
   header: {
     fontSize: 32,
     fontFamily: 'Monaco',
     fontWeight: 'bold',
   },
   inputContainer: {
     justifyContent: 'space-around',
   },
   textInput: {
     width: 350,
     margin: 5,
     padding: 5,
     backgroundColor:'white',
     fontFamily: 'Monaco',
   }
});
