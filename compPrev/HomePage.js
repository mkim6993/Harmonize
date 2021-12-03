import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.outerBorder}>
    <View style={styles.header}>about.</View>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <View style={styles.container4}>
              <View style={styles.aboutText}>
                <View style={styles.subHeader}>
                Contributors
                </View>
                <Text style={styles.smallText}>{'\n'}
                  Author(s): Min Sung Kim{'\n'}
                  Course: 153A Mobile Application Development{'\n'}
                  Professor: Timothy Hickey{'\n'}
                </Text>
              </View>

              <View style={styles.aboutText}>
                <View style={styles.subHeader}>
                Purpose
                </View>
                <Text style={styles.smallText}>{'\n'}
                  This app allows users to comment their thoughts towards
                  a particular video in real time. Users are also able to view other users'
                  responses at the particular time they commented on the video.
                </Text>
              </View>

              <View style={styles.aboutText}>
                <View style={styles.subHeader}>
                Contact
                </View>
                <Text style={styles.smallText}>{'\n'}
                  Email: minsungkim@brandeis.edu{'\n'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#C84268', position: 'absolute', bottom: 50, right: 50}}>
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: '#C84268',
    bottom: 0,
    borderRadius: 50,
  },
  outerBorder: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFDA59',
    flex: 1,
  },
  container1: {
    top: 180,
    bottom: 90,
    left: 50,
    right: 50,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#FFD757',
  },
  container2: {
    top: 1,
    bottom: 4,
    left: 3,
    right: 2,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#FFE181',
  },
  container3: {
    top: 2,
    bottom: 3,
    left: 4,
    right: 2,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#FFE9A1',
  },
  container4: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 5,
    right: 3,
    backgroundColor: '#FFF8E0',
    flexDirection: 'row',
    flex: 3,
  },
  header: {
    fontSize: 150,
    fontFamily: 'light-italic',
    position: 'relative',
    alignItems: 'center',
  },
  aboutText: {
    flex: 1,
    padding:20,
    backgroundColor:'#FFF8E0',
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 3
    },
    margin: 20,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'column',
  },
  subHeader: {
    fontSize: 40,
    fontFamily: 'light-italic',
  },
  smallText: {
    fontSize: 20,
    fontFamily: 'light-italic',
  },
});
