import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Blink extends Component {
  state = {
    isShow: true,
    time: null,
    count: 0,
  };
  componentDidMount() {
    this.time = setInterval(() => {
      if (this.state.count > 5) {
        clearInterval(this.time);
        this.setState({time: null, isShow: true});
      }
      this.setState({count: this.state.count + 1});
      this.setState({isShow: !this.state.isShow});
    }, 1000);
  }
  componentWillUnmount() {
    // this.time = null
  }
  render() {
    if (!this.state.isShow) return null;
    return <Text style={{fontSize: 24}}>{this.props.text}</Text>;
  }
}
class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="hello" />
        <Blink text="world" />
      </View>
    );
  }
}

export default BlinkApp;
