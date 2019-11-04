import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Banner extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <Image
        source={pic}
        style={{
          justifyContent: 'center',
          width: 100,
          height: 100,
          alignContent: 'center',
        }}
      />
    );
  }
}
