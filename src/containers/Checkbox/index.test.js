import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedCheckbox from '.';
import Checkbox from '../../components/Checkbox';
import markComplete from '../../state/actions/markComplete';

jest.mock('../../state/actions/markComplete');
jest.mock('../../components/Checkbox', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedCheckbox,
  Component: Checkbox
});

describe('connected Checkbox', () => {
  testRender();
  testAction({
    actionName: 'markComplete',
    action: markComplete,
    params: { id: Symbol('test-id') }
  });
});
