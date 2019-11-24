import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './index';
import styles from './index.css';

const mockOnChange = jest.fn();
const mockValue = 'test-value';

const defaultProps = { onChange: mockOnChange, value: mockValue };

const render = overrideProps => shallow(<TextArea {...defaultProps} {...overrideProps} />);

describe('<TextArea/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when there are additional styles provided', () => {
    it('should append them to the className', () => {
      const mockAdditionalClassName = 'test-class';
      expect(render({ additionalStyles: mockAdditionalClassName }).prop('className')).toEqual(`${styles.textArea} ${mockAdditionalClassName}`);
    });
  });
});
