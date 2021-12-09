import React, { Component } from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from './ThemeContext.js';

export default function Login({ toggle }) {
  const navigation = useNavigation();
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : 'white',
    color: darkTheme ? 'white' : '#333',
    borderColor: darkTheme ? 'white' : '#333',
  }

  return (
      <SafeAreaView style={[styles.safeArea, themeStyles]}>
        <View style={[styles.allContent, themeStyles]}>
          <View style={[styles.boxContainer, themeStyles]}>
            <View style={[styles.contentContainer, themeStyles]}>
              <Text style={[styles.header, themeStyles]}>
                Login
              </Text>
              <TextInput
                      placeholder="Username"
                      autoCapitalize="none"
                      style={[styles.textInput, {marginTop: 8}, themeStyles]}
              />
              <TextInput
                      placeholder="Password"
                      autoCapitalize="none"
                      secureTextEntry={true}
                      style={[styles.textInput, {marginTop: 5, marginBottom: 5}, themeStyles]}
              />
              <View style={{margin: 6, width: '100%'}}>
                <Button title="Login" onPress={() => navigation.push('Directory')}/>
              </View>
              <View style={{height: 1, backgroundColor: '#B4B4B4', marginLeft: 10, marginRight: 10, marginTop: 10, width: '100%'}}></View>
              <Text style={[styles.detailedText, themeStyles]}>
                Forgot password?
              </Text>
            </View>
            <View style={[styles.contentContainer, {marginTop: 10}, themeStyles]}>
              <Text style={[styles.detailedText, themeStyles]}>
                Don't have an account?
              </Text>
              <View style={{height: 1, backgroundColor: '#B4B4B4', marginLeft: 10, marginRight: 10, marginTop: 10, width: '100%'}}></View>
              <View style={{margin: 6, width: '100%'}}>
                <Button title="Sign Up"/>
              </View>
              <View style={{margin: 6, width: '100%'}}>
                <Button title="About" onPress={() => navigation.push('About')}/>
              </View>
            </View>
          </View>
        </View>
        <Button title='Toggle Theme' onPress={toggle}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  detailedText: {
    fontFamily: 'SF',
    fontSize: 12,
    margin: 15,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#070a1d',
    padding: 3,
    width: '100%',
  },
  header: {
    fontSize: 32,
    fontFamily: 'SF',
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    borderWidth: .5,
  },
  boxContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  photo: {
    backgroundColor: 'green',
    borderRadius: 80,
    width: 160,
    height: 160,
    margin: 15,
    alignItems: 'center',
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 4
    },
  },
  allContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#525252',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
