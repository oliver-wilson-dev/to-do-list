
import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index';

const mockMarkComplete = jest.fn();
const mockId = Symbol('test-id');

const defaultProps = { markComplete: mockMarkComplete, complete: false, id: mockId };

const render = overrideProps => shallow(<Checkbox {...defaultProps} {...overrideProps} />);

describe('<Checkbox/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  describe('when the checkbox is checked', () => {
    it('should render correctly', () => {
      expect(render({ complete: true })).toMatchSnapshot();
    });

    describe('and the checkbox is then unchecked', () => {
      it('should call the markComplete function with the id of the task', () => {
        render({ complete: true }).simulate('change');

        expect(mockMarkComplete).toHaveBeenCalledWith({ id: mockId });
      });
    });
  });

  describe('when the checkbox is not checked', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    describe('and the checkbox is then checked', () => {
      it('should call the markComplete function with the id of the task', () => {
        render().simulate('change');

        expect(mockMarkComplete).toHaveBeenCalledWith({ id: mockId });
      });
    });
  });
});
