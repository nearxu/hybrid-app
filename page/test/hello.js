import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Hello extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>hello world</Text>
      </View>
    );
  }
}
