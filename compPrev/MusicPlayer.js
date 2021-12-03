import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Sample({ navigation }) {
  const [list, setList] = React.useState([]);


  // let directory = '../music';
  // const fs = require('fs');
  // let dirBuf = Buffer.from(directory);
  //
  // let files = fs.readdirSync(directory);
  // console.log(files);




  return (
    <View style={{flex: 1, backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center'}}>

      <Button
        title="Another Question"
        onPress={() => newValues()}
      />
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
