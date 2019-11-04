import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';

export default class InputComponent extends Component {
  state = {text: ''};
  render() {
    return (
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <TextInput
          style={{height: 40}}
          placeholder="plaese input"
          value={this.state.text}
          onChangeText={texts => this.setState({text: texts})}
        />
        <Text>{this.state.text}</Text>
        <Button
          onPress={() => {
            Alert.alert('click');
          }}
          title="click me"
        />
      </View>
    );
  }
}
