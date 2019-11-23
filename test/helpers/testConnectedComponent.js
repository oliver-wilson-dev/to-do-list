import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import testAction from './testAction';
import testProp from './testProp';
import testRender from './testRender';

const testConnectedComponent = ({ ConnectedComponent, Component, initialStore = {} }) => {
  const state = initialStore;
  const createMockStore = () => createStore(() => state);

  const stateParam = Symbol('state');

  const render = () => mount(
    <Provider store={createMockStore()}>
      <ConnectedComponent />
    </Provider>
  );


  return {
    testProp: testProp({
      stateParam, render, Component, state
    }),
    testAction: testAction({ render, Component }),
    testRender: testRender({ render, Component }),
    stateParam
  };
};

export default testConnectedComponent;
