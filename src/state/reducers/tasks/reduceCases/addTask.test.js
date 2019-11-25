import addTask from './addTask';


describe('addTask reduce case', () => {
  it('should return the previously existing values from state, as well as preserving the existing tasks and appending a new task', () => {
    const mockState = {
      [Symbol('test-key')]: Symbol('test-value'),
      tasks: [{
        id: Symbol('test-id'),
        description: Symbol('test-description')
      }]
    };

    const mockId = Symbol('test-id');
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
        description: mockDescription
      }]
    });
  });
});
