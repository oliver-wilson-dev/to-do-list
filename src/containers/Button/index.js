import { connect } from 'react-redux';
import Button from '../../components/Button';
import incrementCount from '../../state/actions/incrementCount';

const mapDispatchToProps = dispatch => ({
  incrementCount: () => dispatch(incrementCount())
});

export default connect(undefined, mapDispatchToProps)(Button);
