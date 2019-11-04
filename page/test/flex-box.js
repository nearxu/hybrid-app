import React, {Component} from 'react';
import {Text, View} from 'react-native';

// flexDirection 默认值是竖直轴(column) row
// justifyContent flex-start、center、flex-end、space-around、space-between以及space-evenly
export default class FlexDirection extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
