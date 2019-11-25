import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

import styles from './index.css';
import List from '../../containers/List';
import AddNewTask from '../../containers/AddNewTask';

jest.mock('../../containers/List', () => {
  const List = () => null;

  return List;
});

jest.mock('../../containers/AddNewTask', () => {
  const AddNewTask = () => null;

  return AddNewTask;
});

const defaultProps = { };

const render = overrideProps => shallow(<App {...defaultProps} {...overrideProps} />);

describe('<App/> component', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it(`should render a div with the className ${styles.app}`, () => {
    expect(render().find('div').first().prop('className')).toBe(styles.app);
  });

  it('should render a <List /> component', () => {
    expect(render().find(List).exists()).toBe(true);
  });

  it('should render a <AddNewTask /> component', () => {
    expect(render().find(AddNewTask).exists()).toBe(true);
  });
});
