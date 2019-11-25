import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedEditButton from '.';
import EditButton from '../../components/EditButton';
import setEditState from '../../state/actions/setEditState';

jest.mock('../../state/actions/setEditState');
jest.mock('../../components/EditButton', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedEditButton,
  Component: EditButton
});

describe('connected EditButton', () => {
  testRender();
  testAction({
    actionName: 'setEditState',
    action: setEditState,
    params: {
      id: Symbol('test-id'),
      editState: Symbol('test-edit-state'),
      description: Symbol('test-description')
    }
  });
});
