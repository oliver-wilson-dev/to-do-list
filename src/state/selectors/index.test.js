import {
  getTasks
} from '.';

describe('getTasks', () => {
  it('returns the count property in state', () => {
    const mockToDos = Symbol('test-todo');
    expect(getTasks({ tasks: { tasks: mockToDos } })).toEqual(
      mockToDos
    );
  });
});
