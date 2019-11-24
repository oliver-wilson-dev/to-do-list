import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedDeleteButton from '.';
import DeleteButton from '../../components/DeleteButton';
import removeToDo from '../../state/actions/removeToDo';

jest.mock('../../state/actions/removeToDo');
jest.mock('../../state/selectors');
jest.mock('../../components/DeleteButton', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedDeleteButton,
  Component: DeleteButton
});

describe('connected DeleteButton', () => {
  testRender();
  testAction({
    actionName: 'removeToDo',
    action: removeToDo,
    params: { id: Symbol('test-id') }
  });
});
