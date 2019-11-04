import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';

export default class FastList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={Array.from({length: 10}, (v, i) => ({id: i}))}
          renderItem={({item}) => <Text style={{flex: 1}}>{item.id}</Text>}
        />
      </View>
    );
  }
}
