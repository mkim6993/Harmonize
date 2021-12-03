import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Sample({ navigation }) {
  const[username, setUsername] = useState('');

  const saveName = (event) => {
    event.preventDefault();
    alert('The name you entered was: ' + username);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Hello goooooooood
      </Text>
      <form onSubmit={saveName}>
        <Text>Enter your username: </Text>
          <TextInput
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           />
        <TextInput type='submit' />
      </form>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
