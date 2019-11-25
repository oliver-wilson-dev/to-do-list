import getInitialState from './getInitialState';
import getCookie from './cookieUtilities/getCookie';
import { INITIAL_STATE } from './constants';
import { TASKS_COOKIE } from './cookieUtilities/constants';

jest.mock('./cookieUtilities/getCookie');

const mockTask = { 'test-key': 'test-value' };
const mockTasks = [mockTask];

const commonAssertions = () => {
  it('should call getCookie with the name of the cookie ("tasks")', () => {
    getInitialState();
    expect(getCookie).toHaveBeenCalledWith({ name: TASKS_COOKIE });
  });
};

describe('getInitialState', () => {
  describe('when there are some tasks written to the "task" cookie', () => {
    beforeEach(() => {
      getCookie.mockReturnValueOnce(JSON.stringify(mockTasks));
    });

    commonAssertions();

    it('should return the parsed tasks, each with an id assigned', () => {
      expect(getInitialState()).toEqual({ tasks: [{ ...mockTask, id: expect.anything() }] });
    });
  });

  describe('when there is not some tasks written to the "task" cookie', () => {
    beforeEach(() => {
      getCookie.mockReturnValueOnce(undefined);
    });

    commonAssertions();

    it('should return the initial state', () => {
      expect(getInitialState()).toEqual({ tasks: INITIAL_STATE });
    });
  });
});
