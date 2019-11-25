import addItem from './addItem';


describe('addItem reduce case', () => {
  it('should return the previously existing values from state, as well as preserving the existing todos and appending a new todo', () => {
    const mockState = {
      [Symbol('test-key')]: Symbol('test-value'),
      toDos: [{
        id: Symbol('test-id'),
        description: Symbol('test-description')
      }]
    };

    const mockId = Symbol('test-id');
    const mockDescription = Symbol('test-description');

    expect(addItem({ state: mockState })({
      payload: {
        id: mockId,
        description: mockDescription
      }
    })).toEqual({
      ...mockState,
      toDos: [...mockState.toDos, {
        id: mockId,
        description: mockDescription
      }]
    });
  });
});
