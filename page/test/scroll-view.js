import React, {Component} from 'react';
import {ScrollView, Image, Text} from 'react-native';

export default class ScrollViewComponent extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
      </ScrollView>
    );
  }
}
