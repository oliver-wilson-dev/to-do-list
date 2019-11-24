import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';

import DeleteButton from '../../containers/DeleteButton';
import EditButton from '../../containers/EditButton';
import Checkbox from '../../containers/Checkbox';
import TextArea from '../TextArea';

jest.mock('../Button', () => {
  const Button = () => null;

  return Button;
});

jest.mock('../../containers/DeleteButton', () => {
  const DeleteButton = () => null;

  return DeleteButton;
});

jest.mock('../../containers/EditButton', () => {
  const EditButton = () => null;

  return EditButton;
});

jest.mock('../../containers/Checkbox', () => {
  const Checkbox = () => null;

  return Checkbox;
});

jest.mock('../TextArea', () => {
  const TextArea = () => null;

  return TextArea;
});

const mockIndex = 0;
const mockId = Symbol('test-id');
const mockDescription = 'test-description';
const mockComplete = false;
const mockEditing = false;

const defaultProps = {
  description: mockDescription,
  id: mockId,
  index: mockIndex,
  editing: mockEditing,
  complete: mockComplete
};

const render = overrideProps => shallow(<ListItem {...defaultProps} {...overrideProps} />);

describe('<ListItem/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  test.each`
  index| expected    
  ${0} | ${0} 
  ${1} | ${1} 
  ${2} | ${2}
  ${3} | ${3}
  ${4} | ${4}
  ${5} | ${0}
  ${6} | ${1}
  ${7} | ${2}
  ${8} | ${3}
  ${9} | ${4}
`('when the index is $index it sets the correct className based on the index of the task', ({ index, expected }) => {
  expect(render({ index }).find('li').prop('className')).toMatch(`listItemNth${expected}`);
});

  describe('when the task is being edited', () => {
    it('should render correctly', () => {
      expect(render({ editing: true })).toMatchSnapshot();
    });

    describe('and the editing is done', () => {
      it('should set the description to be the new description provided', () => {
        const mockNewDescription = 'test-new-description';

        const wrapper = render({ editing: true });
        wrapper.find(TextArea).simulate('change', { target: { value: mockNewDescription } });
        expect(wrapper.find(EditButton).prop('description')).toEqual(mockNewDescription);
      });
    });
  });

  describe('when the task is not being edited', () => {
    describe('and the task is complete', () => {
      it('should render correctly', () => {
        expect(render({ editing: false, complete: true })).toMatchSnapshot();
      });
    });

    describe('and the task is not complete', () => {
      it('should render correctly', () => {
        expect(render({ editing: false, complete: false })).toMatchSnapshot();
      });
    });
  });
});
