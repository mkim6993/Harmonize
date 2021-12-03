import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView} from 'react-native';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.allContent}>
          <View style={styles.boxContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.header}>
                Login
              </Text>
              <TextInput
                      placeholder="Username"
                      autoCapitalize="none"
                      style={[styles.textInput, {marginTop: 8}]}
              />
              <TextInput
                      placeholder="Password"
                      autoCapitalize="none"
                      secureTextEntry={true}
                      style={[styles.textInput, {marginTop: 5, marginBottom: 5}]}
              />
              <View style={{margin: 6, width: '100%'}}>
                <Button title="Login" onPress={() => navigation.push('Directory')}/>
              </View>
              <View style={{height: 1, backgroundColor: '#B4B4B4', marginLeft: 10, marginRight: 10, marginTop: 10, width: '100%'}}></View>
              <Text style={styles.detailedText}>
                Forgot password?
              </Text>
            </View>
            <View style={[styles.contentContainer, {marginTop: 10}]}>
              <Text style={styles.detailedText}>
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
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
