import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers';
import AddTodo from './componens/add-todo';
import TodoList from './componens/todo-list';
import Footer from './componens/foot';

const Index = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default class AppTodo extends Component {
  render() {
    const store = createStore(rootReducer);
    console.log(store);
    return (
      <Provider store={store}>
        <Index></Index>
      </Provider>
    );
  }
}
