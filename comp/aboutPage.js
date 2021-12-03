import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { AboutCard } from './AboutCard.js';

export default function About({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.outerBorder}>
      <Text style={styles.header}>about.</Text>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <View style={styles.container4}>
                <AboutCard>
                  <ScrollView>
                  <Text style={styles.subHeader}>
                  Contributors
                  </Text>
                  <Text style={styles.smallText}>{'\n'}...{'\n'}{'\n'}{'\n'}
                    Author(s): Min Sung Kim{'\n'}
                    Course: 153A Mobile Application Development{'\n'}
                    Professor: Timothy Hickey{'\n'}
                  </Text>
                  </ScrollView>
                </AboutCard>

                <AboutCard>
                <ScrollView>
                  <Text style={styles.subHeader}>
                  Purpose
                  </Text>
                  <Text style={styles.smallText}>{'\n'}...{'\n'}{'\n'}{'\n'}
                    This app creates harmonizing voices using a single recorded track
                    from the user.
                  </Text>
                  </ScrollView>
                </AboutCard>

                <AboutCard>
                <ScrollView>
                  <Text style={styles.subHeader}>
                  Contact
                  </Text>
                  <Text style={styles.smallText}>{'\n'}...{'\n'}{'\n'}{'\n'}
                    Email: minsungkim@brandeis.edu{'\n'}
                  </Text>
                  </ScrollView>
                </AboutCard>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#C84268', position: 'absolute', bottom: 50, right: 50}}>
          <Button title="Back" onPress={() => navigation.goBack()}></Button>
        </View>
      </View>
    </SafeAreaView>
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
    backgroundColor: '#070a1d',
    flex: 1,
  },
  container1: {
    top: '20%',
    bottom: '10%',
    left: '5%',
    right: '5%',
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#B3BE74',
  },
  container2: {
    top: 1,
    bottom: 4,
    left: 3,
    right: 2,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#C6D282',
  },
  container3: {
    top: 2,
    bottom: 3,
    left: 4,
    right: 2,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#D5E28D',
  },
  container4: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 5,
    right: 3,
    backgroundColor: '#e2ef98',
    flexDirection: 'column',
    flex: 3,
  },
  header: {
    fontSize: 100,
    fontFamily: 'Monaco',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
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
