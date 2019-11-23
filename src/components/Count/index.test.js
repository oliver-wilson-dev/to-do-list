import React from 'react';
import { shallow } from 'enzyme';
import Count from './index';

const defaultProps = { count: 0 };

const render = overrideProps => shallow(<Count {...defaultProps} {...overrideProps} />);

describe('<Count/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when the count prop changes', () => {
    it('should reflect that change in the h1 text', () => {
      expect(render().setProps({ count: 123 })).toMatchSnapshot();
    });
  });
});
