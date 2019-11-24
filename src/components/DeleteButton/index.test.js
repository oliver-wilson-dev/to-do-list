import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from './index';
import Button from '../Button';

jest.mock('../Button', () => {
  const Button = () => null;

  return Button;
});

const mockId = Symbol('test-id');
const defaultProps = { removeToDo: jest.fn(), id: mockId };

const render = overrideProps => shallow(<DeleteButton {...defaultProps} {...overrideProps} />);

describe('<DeleteButton/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe("when the button's onClick prop is called", () => {
    it("should call the removeToDo function with the task's id", () => {
      const mockRemoveToDo = jest.fn();
      const mockId = Symbol('test-id');

      render({ removeToDo: mockRemoveToDo, id: mockId })
        .find(Button).simulate('click');

      expect(mockRemoveToDo).toHaveBeenCalledWith({ id: mockId });
    });
  });
});
