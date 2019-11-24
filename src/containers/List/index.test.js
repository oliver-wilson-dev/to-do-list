import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedList from '.';
import List from '../../components/List';
import { getToDos } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../components/List', () => () => null);

const { testRender, testProp } = testReduxComponent({
  ConnectedComponent: ConnectedList,
  Component: List
});

describe('connected List', () => {
  testRender();
  testProp({ propName: 'toDos', action: getToDos });
});
