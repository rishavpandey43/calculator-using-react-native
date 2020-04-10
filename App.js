/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
      inputText: '',
    };
    this.operations = ['DEL', '+', '-', '*', '/'];
  }

  calculateResult() {
    const text = this.state.inputText;

    // trick is
    // eval(text);

    this.setState({resultText: eval(text), inputText: ''});
  }

  validate() {
    const text = this.state.inputText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  buttonPressed = text => {
    if (text === '=') {
      return this.validate() && this.calculateResult();
    }

    this.setState({inputText: this.state.inputText + text});
  };

  operate(operation) {
    switch (operation) {
      case 'DEL':
        if (this.state.inputText === '') {
          this.setState({resultText: ''});
          return;
        }

        let text = this.state.inputText.split('');
        text.pop();
        this.setState({inputText: text.join('')});
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.inputText.split('').pop();

        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.inputText === '') return;
        this.setState({inputText: this.state.inputText + operation});
    }
  }

  render() {
    let rows = [];
    let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => {
              this.buttonPressed(num[i][j]);
            }}
            style={styles.btn}
            key={i + j}>
            <Text style={styles.btnText}>{num[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(
        <View style={[styles.row, styles.white]} key={i}>
          {row}
        </View>,
      );
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          onPress={() => {
            this.operate(this.operations[i]);
          }}
          style={styles.btn}
          key={i}>
          <Text style={[styles.btnText, styles.white]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return (
      <>
        <View style={styles.sectionContainer}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View />
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.inputText}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>{rows}</View>
            <View style={styles.operations}>{ops}</View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 40,
    color: 'black',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 30,
    padding: 20,
    color: 'white',
  },
  white: {
    color: 'white',
    paddingTop: 20,
  },
  calculationText: {
    fontSize: 24,
    color: 'black',
  },
  result: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 4,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 2,
    backgroundColor: '#636363',
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
