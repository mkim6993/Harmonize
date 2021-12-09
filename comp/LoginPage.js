import React, { Component } from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView} from 'react-native';
import LoginP from './LoginPageComp.js';
import { ThemeContext } from './ThemeContext.js';

export default function Login({ navigation }) {
  const[darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <LoginP toggle={toggleTheme}/>
    </ThemeContext.Provider>
  );
}
