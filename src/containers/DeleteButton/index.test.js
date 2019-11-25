import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedDeleteButton from '.';
import DeleteButton from '../../components/DeleteButton';
import removeTask from '../../state/actions/removeTask';

jest.mock('../../state/actions/removeTask');
jest.mock('../../state/selectors');
jest.mock('../../components/DeleteButton', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedDeleteButton,
  Component: DeleteButton
});

describe('connected DeleteButton', () => {
  testRender();
  testAction({
    actionName: 'removeTask',
    action: removeTask,
    params: { id: Symbol('test-id') }
  });
});
