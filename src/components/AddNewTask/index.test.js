import React from 'react';
import { shallow } from 'enzyme';
import AddNewTask from './index';
import Button from '../Button';
import TextArea from '../TextArea';

const mockRef = Symbol('test-ref');
jest.spyOn(React, 'useRef').mockImplementation(() => mockRef);

jest.mock('../Button', () => {
  const Button = () => null;

  return Button;
});

jest.mock('../TextArea', () => {
  const TextArea = () => null;

  return TextArea;
});

const mockAddTask = jest.fn();

const defaultProps = { addTask: mockAddTask };

const render = overrideProps => shallow(<AddNewTask {...defaultProps} {...overrideProps} />);

describe('<App/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render a <Button /> component', () => {
    expect(render().find(Button).exists()).toBe(true);
  });

  it('should render a <TextArea /> component', () => {
    expect(render().find(TextArea).exists()).toBe(true);
  });

  it('should pass the ref to the <TextArea /> component', () => {
    expect(render().find(TextArea).prop('reference')).toEqual(mockRef);
  });

  describe('when rendering the <TextArea />', () => {
    it('should have a default value of an empty string', () => {
      expect(render().find(TextArea).prop('value')).toEqual('');
    });

    describe('when the text area onChange handler is called', () => {
      it('should pass the new description as the value prop to the <TextArea />', () => {
        const newDescription = 'test-new-description';
        const wrapper = render();
        wrapper.find(TextArea).simulate('change', { target: { value: newDescription } });

        expect(wrapper.find(TextArea).prop('value')).toEqual(newDescription);
      });
    });
  });

  describe('when rendering the Button component', () => {
    describe('when the onClick handler is called', () => {
      it('should call addTask with the description', () => {
        const addTask = jest.fn();
        const wrapper = render({ addTask });

        wrapper.find(Button).simulate('click');

        expect(addTask).toHaveBeenCalledWith({ description: '' });
      });

      describe('when the description has been set', () => {
        it('should set the description back to an empty string', () => {
          const addTask = jest.fn();
          const wrapper = render({ addTask });
          const newDescription = 'test-new-description';

          wrapper.find(TextArea).simulate('change', { target: { value: newDescription } });
          wrapper.find(Button).simulate('click');

          expect(wrapper.find(TextArea).prop('value')).toEqual('');
        });
      });
    });
  });
});
