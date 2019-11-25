import setEditState from './setEditState';

describe('setEditState reduce case', () => {
  const mockId = Symbol('test-id');
  const mockEditing = false;
  const mockDescription = Symbol('test-description');

  const firstTask = {
    id: mockId,
    description: mockDescription,
    editing: mockEditing,
    [Symbol('test-key')]: Symbol('test-value'),
  };

  const secondTask = {
    id: Symbol('test-id'),
    description: Symbol('test-description'),
    editing: mockEditing,
    [Symbol('test-key')]: Symbol('test-value'),
  };

  const mockState = {
    [Symbol('test-key')]: Symbol('test-value'),
    tasks: [firstTask, secondTask]
  };

  describe('when the id provided matches the id of a task', () => {
    describe('when the task is being edited', () => {
      it(`should return the previously existing values from state, 
        and should mark the editing property of the task in question to the value of the editState
        and set the new description to be the value of the description param`, () => {
        const mockEditState = Symbol('test-edit-state');
        const mockDescription = Symbol('test-description');

        expect(setEditState({
          state:
            {
              ...mockState,
              tasks: [
                { ...firstTask, editing: true },
                secondTask]
            }
        })({
          payload: {
            id: mockId,
            editState: mockEditState,
            description: mockDescription
          }
        })).toEqual({
          ...mockState,
          tasks: [{
            ...firstTask,
            editing: mockEditState,
            description: mockDescription
          },
          secondTask]
        });
      });
    });

    describe('when the task is not being edited', () => {
      it(`should return the previously existing values from state, 
        and should mark the editing property of the task in question to the value of the editState`, () => {
        const mockEditState = Symbol('test-edit-state');
        const mockDescription = Symbol('test-description');

        expect(setEditState({ state: mockState })({
          payload: {
            id: mockId,
            editState: mockEditState,
            description: mockDescription
          }
        })).toEqual({
          ...mockState,
          tasks: [{ ...firstTask, editing: mockEditState }, secondTask]
        });
      });
    });
  });

  describe('when the id provided does not match the id of a task', () => {
    it('should return the same values that are already in state', () => {
      const mockEditState = Symbol('test-edit-state');
      const mockDescription = Symbol('test-description');

      expect(setEditState({ state: mockState })({
        payload: {
          id: Symbol('some-other-id'),
          editState: mockEditState,
          description: mockDescription
        }
      })).toEqual(mockState);
    });
  });
});
