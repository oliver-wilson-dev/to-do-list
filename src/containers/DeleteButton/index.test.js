import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedButton from '.';
import Button from '../../components/Button';
import incrementCount from '../../state/actions/incrementCount';

jest.mock('../../state/actions/incrementCount');
jest.mock('../../state/selectors');
jest.mock('../../components/Button', () => () => null);

const { testRender, testAction } = testReduxComponent({
  ConnectedComponent: ConnectedButton,
  Component: Button
});

describe('connected Button', () => {
  testRender();
  testAction('incrementCount', incrementCount);
});
