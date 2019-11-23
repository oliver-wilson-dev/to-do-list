import { connect } from 'react-redux';
import Count from '../../components/Count';
import { getCount } from '../../state/selectors';

const mapStateToProps = state => ({
  count: getCount(state)
});

export default connect(mapStateToProps)(Count);
