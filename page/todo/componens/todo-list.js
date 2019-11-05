import React, {Component} from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {toggleTodo} from '../actions';
class Todo extends Component {
  render() {
    const {text, completed, onClick} = this.props;
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
        }}
        onPress={onClick}>
        <Text style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
class TodoList extends Component {
  _renderItem(data) {
    let {toggleTodo} = this.props;
    let dataItem = data.item;
    const {id} = dataItem;
    return <Todo {...dataItem} onClick={() => toggleTodo(id)} />;
  }
  render() {
    const {todos} = this.props;
    console.log(todos, 'todos');
    return (
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={this._renderItem}
      />
    );
  }
}

const getVisiTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(m => m.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(m => !m.completed);

    default:
      return todos;
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: getVisiTodos(state.todos, state.filter),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
