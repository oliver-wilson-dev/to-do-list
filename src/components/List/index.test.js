import React from 'react';
import { shallow } from 'enzyme';
import List from './index';

jest.mock('../ListItem', () => {
  const ListItem = () => null;

  return ListItem;
});

const mockId = Symbol('test-id');
const mockDescription = 'test-description';
const mockComplete = false;
const mockEditing = false;

const mockToDos = [{
  description: mockDescription,
  id: mockId,
  editing: mockEditing,
  complete: mockComplete
}, {
  description: mockDescription,
  id: mockId,
  editing: !mockEditing,
  complete: !mockComplete
}];

const defaultProps = { toDos: mockToDos };

const render = overrideProps => shallow(<List {...defaultProps} {...overrideProps} />);

describe('<List/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
