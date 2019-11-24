import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

import styles from './index.css';

const mockOnClick = jest.fn();

const defaultProps = { onClick: mockOnClick };

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

  describe('when there are children to be rendered', () => {
    it('renders correctly', () => {
      expect(render({ children: <span>hello world</span> })).toMatchSnapshot();
    });
  });

  describe('when there are additionalStyles to be applied', () => {
    it('renders correctly', () => {
      const mockAdditionalStyles = 'test-additional-styles';
      expect(render({ additionalStyles: mockAdditionalStyles })
        .find('button')
        .prop('className'))
        .toEqual(`${styles.button} ${mockAdditionalStyles}`);
    });
  });

  describe('when the button is clicked', () => {
    it('should call the onClick handler', () => {
      const mockOnClick = jest.fn();
      const wrapper = render({ onClick: mockOnClick });

      wrapper.find('button').simulate('click');

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
