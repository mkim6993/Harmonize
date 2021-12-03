import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

export default class Posts extends Component {
  state = {
    username: '',
  }

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      if (username !== null) {
        this.setState({ username });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.headerWelcome1}>
          <Text>Welcome { this.state.username }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5C578',
    flexDirection: 'row',
  },
  headerWelcome1: {
    backgroundColor: '#DEA445',
    position: 'absolute',
    padding: 20,
    right: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});
