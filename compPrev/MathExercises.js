import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Sample({ navigation }) {
  const[x, setX] = useState(getRandomInt(1, 10));
  const[y, setY] = useState(getRandomInt(1, 10));

  const[answer, setAnswer] = useState(0);
  const[userAnswer, setUserAnswer] = useState('');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function result() {
    event.preventDefault();
    var userAttempt = parseInt(userAnswer, 10);
    var correctAnswer = x * y;
    if (userAttempt != correctAnswer){
      alert("that is incorrect. answer is " + correctAnswer);
    }
    else {
      alert ("correct");
    }
  }

  function newValues() {
    setX(getRandomInt(1, 10));
    setY(getRandomInt(1, 10));
    setUserAnswer('');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        What is {x} * {y} ?
      </Text>
      <form onSubmit={result}>
        <label><Text>Enter your answer:</Text>
          <input
            type='text'
            placeholder="input answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
           />
        </label>
        <input type='submit' />
      </form>
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
