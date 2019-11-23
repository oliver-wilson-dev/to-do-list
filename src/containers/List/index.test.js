import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedCount from '.';
import Count from '../../components/Count';
import { getCount } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../components/Count', () => () => null);

const { testRender, testProp } = testReduxComponent({
  ConnectedComponent: ConnectedCount,
  Component: Count
});

describe('connected Count', () => {
  testRender();
  testProp('count', getCount);
});
