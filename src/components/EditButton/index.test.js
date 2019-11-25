import React from 'react';
import { shallow } from 'enzyme';
import EditButton from './index';
import Button from '../Button';

jest.mock('../Button', () => {
  const Button = () => null;

  return Button;
});

const mockId = Symbol('test-id');
const mockDescription = 'test-description';
const mockSetEditState = jest.fn();
const mockEditing = false;

const defaultProps = {
  setEditState: mockSetEditState,
  id: mockId,
  editing: mockEditing,
  description: mockDescription
};

const render = overrideProps => shallow(<EditButton {...defaultProps} {...overrideProps} />);

describe('<EditButton/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onClickChecks = ({ mockEditing } = { mockEditing: false }) => {
    describe("when the button's onClick prop is called", () => {
      it("should call the removeTask function with the task's id", () => {
        const mockId = Symbol('test-id');
        const mockDescription = 'test-description';
        const mockSetEditState = jest.fn();

        render({
          setEditState: mockSetEditState,
          id: mockId,
          editing: mockEditing,
          description: mockDescription
        })
          .find(Button).simulate('click');

        expect(mockSetEditState)
          .toHaveBeenCalledWith({
            id: mockId,
            editState: !mockEditing,
            description: mockDescription
          });
      });
    });
  };

  describe('when the task is not being edited', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    onClickChecks();
  });

  describe('when the task is being edited', () => {
    it('should render correctly', () => {
      expect(render({ editing: true })).toMatchSnapshot();
    });

    onClickChecks({ mockEditing: true });
  });
});
