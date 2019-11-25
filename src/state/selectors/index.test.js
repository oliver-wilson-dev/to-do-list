import {
  getToDos
} from '.';

describe('getToDos', () => {
  it('returns the count property in state', () => {
    const mockToDos = Symbol('test-todo');
    expect(getToDos({ toDos: { toDos: mockToDos } })).toEqual(
      mockToDos
    );
  });
});
