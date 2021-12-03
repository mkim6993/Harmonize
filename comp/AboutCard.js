import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AboutCard = (props) => (
  <View style={styles.aboutText}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
    aboutText: {
      flex: 1,
      padding:10,
      backgroundColor:'#FFF8E0',
      shadowColor: "grey",
      shadowOpacity: 0.8,
      shadowRadius: 10,
      shadowOffset: {
        height: 5,
        width: 3
      },
      margin: 10,
      borderRadius: 15,
      flexDirection: 'column',
      textAlign: 'center',
    },
});
