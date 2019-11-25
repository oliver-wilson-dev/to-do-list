import addTask from './addTask';
import setCookie from '../cookieUtilities/setCookie';

jest.mock('../cookieUtilities/setCookie');

describe('addTask reduce case', () => {
  const mockState = {
    [Symbol('test-key')]: Symbol('test-value'),
    tasks: [{
      id: Symbol('test-id'),
      description: Symbol('test-description')
    }]
  };

  const mockId = Symbol('test-id');

  it('should call setCookie with the tasks', () => {
    const mockDescription = 'test-description';

    addTask({ state: mockState })({
      payload: {
        id: mockId,
        description: mockDescription
      }
    });

    expect(setCookie).toHaveBeenCalledWith({
      name: 'tasks',
      value: JSON.stringify([...mockState.tasks,
        { description: mockDescription, complete: false, editing: false }])
    });
  });

  it('should return the previously existing values from state, as well as preserving the existing tasks and appending a new task', () => {
    const mockDescription = Symbol('test-description');

    expect(addTask({ state: mockState })({
      payload: {
        id: mockId,
        description: mockDescription
      }
    })).toEqual({
      ...mockState,
      tasks: [...mockState.tasks, {
        id: mockId,
        description: mockDescription,
        complete: false,
        editing: false
      }]
    });
  });
});
