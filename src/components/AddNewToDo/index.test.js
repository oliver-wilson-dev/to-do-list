import React from 'react';
import { shallow } from 'enzyme';
import AddNewToDo from './index';

import styles from './index.css';
import Button from '../Button';
import TextArea from '../TextArea';

jest.mock('../Button', () => {
  const Button = () => null;

  return Button;
});

jest.mock('../TextArea', () => {
  const TextArea = () => null;

  return TextArea;
});

const mockAddToDo = jest.fn();

const defaultProps = { addToDo: mockAddToDo };

const render = overrideProps => shallow(<AddNewToDo {...defaultProps} {...overrideProps} />);

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
      it('should call addToDo with the description', () => {
        const addToDo = jest.fn();
        const wrapper = render({ addToDo });

        wrapper.find(Button).simulate('click');

        expect(addToDo).toHaveBeenCalledWith({ description: '' });
      });

      describe('when the description has been set', () => {
        it('should set the description back to an empty string', () => {
          const addToDo = jest.fn();
          const wrapper = render({ addToDo });
          const newDescription = 'test-new-description';

          wrapper.find(TextArea).simulate('change', { target: { value: newDescription } });
          wrapper.find(Button).simulate('click');

          expect(wrapper.find(TextArea).prop('value')).toEqual('');
        });
      });
    });
  });
});
