import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Child extends Component {
  render() {
    return (
      <Text style={[styles.redColor, styles.bold]}>{this.props.name}!</Text>
    );
  }
}

export default class Parent extends Component {
  render() {
    return (
      <View>
        <Child name="props-for" />
        <Child name="parent -to -child" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redColor: {
    color: 'red',
    flex: 1,
    backgroundColor: 'skyblue',
  },
  bold: {
    fontWeight: 'bold',
  },
});
