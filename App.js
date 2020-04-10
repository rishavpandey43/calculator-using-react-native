/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
            </View>
            <View style={styles.row}>
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
            </View>
            <View style={styles.row}>
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
            </View>
            <View style={styles.row}>
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
              <Button title="0" onPress={() => {}} />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" onPress={() => {}} />
            <Button title="-" onPress={() => {}} />
            <Button title="*" onPress={() => {}} />
            <Button title="/" onPress={() => {}} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 20,
    color: 'white',
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 4,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
