import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

import styles from './index.css';
import Count from '../../containers/Count';
import Button from '../../containers/Button';

jest.mock('../../containers/Count', () => {
  const Count = () => null;

  return Count;
});

jest.mock('../../containers/Button', () => {
  const Button = () => null;

  return Button;
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

  it('should render a <Count /> component', () => {
    expect(render().find(Count).exists()).toBe(true);
  });

  it('should render a <Button /> component', () => {
    expect(render().find(Button).exists()).toBe(true);
  });
});
