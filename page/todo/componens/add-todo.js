import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
  state = {
    text: '',
  };
  onClick() {
    if (this.state.text === '') return;
    let {dispatch} = this.props;
    dispatch(addTodo(this.state.text));
    this.setState({text: ''});
  }
  render() {
    return (
      <View>
        <TextInput
          value={this.state.text}
          onChangeText={texts => this.setState({text: texts})}
          style={{
            marginTop: 50,
            width: 500,
            fontSize: 24,
            borderWidth: 1,
            borderColor: 'skyblue',
            textAlign: 'left',
            padding: 10,
          }}
          placeholder="plase input"
        />
        <Button title="add todo" onPress={() => this.onClick()} />
      </View>
    );
  }
}

export default connect()(AddTodo);
