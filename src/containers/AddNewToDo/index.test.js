import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedAddNewToDo from '.';
import AddNewToDo from '../../components/AddNewToDo';
import addToDo from '../../state/actions/addToDo';

jest.mock('../../state/actions/addToDo');
jest.mock('../../components/AddNewToDo', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedAddNewToDo,
  Component: AddNewToDo
});

describe('connected AddNewToDo', () => {
  testRender();
  testAction({
    actionName: 'addToDo',
    action: addToDo,
    params: { description: Symbol('test-description') }
  });
});
