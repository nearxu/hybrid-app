import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';

export default class FetchComponent extends Component {
  state = {
    isLoad: true,
  };
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          isLoad: false,
          list: res.movies,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.isLoad) {
      return <Text>loading</Text>;
    }
    return (
      <View>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    );
  }
}
