import React, {Component} from 'react';
import Hello from './hello';
import Banner from './image';
import TestProps from './test-prop';
import TestState from './test-state';
import FlexBox from './flex-box';
import InputComponent from './text-input';
import ScrollViewComponent from './scroll-view';
import FastList from './fast-list';
import FetchComponent from './fetch';

class Test extends Component {
  render() {
    return (
      <>
        <Hello />
        <Banner />
        <TestProps />
        <TestState />
        <FlexBox />
        <InputComponent />
        <ScrollViewComponent />
        <FastList />
        <FetchComponent />
      </>
    );
  }
}

export default Test;
