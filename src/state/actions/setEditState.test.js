import setEditState from './setEditState';
import { SET_EDIT_STATE } from './constants';

describe('setEditState', () => {
  it('should return an object with the type property SET_EDIT_STATE and the payload should contain the id of a task', () => {
    const mockId = Symbol('test-id');
    const mockEditState = Symbol('test-edit-state');
    const mockDescription = Symbol('test-description');
    expect(setEditState({
      id: mockId,
      editState: mockEditState,
      description: mockDescription
    }))
      .toEqual({
        type: SET_EDIT_STATE,
        payload: {
          id: mockId,
          editState: mockEditState,
          description: mockDescription
        }
      });
  });
});
