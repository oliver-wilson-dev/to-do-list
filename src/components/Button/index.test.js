import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

import styles from './index.css';

const defaultProps = { incrementCount: jest.fn() };

const render = overrideProps => shallow(<Button {...defaultProps} {...overrideProps} />);

describe('<Button/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it(`should render a button with the className ${styles.button}`, () => {
    expect(render().find('button').first().prop('className')).toBe(styles.button);
  });

  describe('when the button is clicked', () => {
    it('should call the incrementCount function', () => {
      const incrementCount = jest.fn();

      render({ incrementCount }).simulate('click');
      expect(incrementCount).toHaveBeenCalledTimes(1);
    });
  });
});
