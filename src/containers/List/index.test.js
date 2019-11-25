import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedList from '.';
import List from '../../components/List';
import { getTasks } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../components/List', () => () => null);

const { testRender, testProp } = testReduxComponent({
  ConnectedComponent: ConnectedList,
  Component: List
});

describe('connected List', () => {
  testRender();
  testProp({ propName: 'tasks', action: getTasks });
});
