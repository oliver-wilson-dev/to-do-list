import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedAddNewToDo from '.';
import AddNewTask from '../../components/AddNewTask';
import addTask from '../../state/actions/addTask';

jest.mock('../../state/actions/addTask');
jest.mock('../../components/AddNewTask', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedAddNewToDo,
  Component: AddNewTask
});

describe('connected AddNewTask', () => {
  testRender();
  testAction({
    actionName: 'addTask',
    action: addTask,
    params: { description: Symbol('test-description') }
  });
});
