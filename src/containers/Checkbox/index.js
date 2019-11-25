import { connect } from 'react-redux';
import Checkbox from '../../components/Checkbox';
import markComplete from '../../state/actions/markComplete';

const mapDispatchToProps = dispatch => ({
  markComplete:
  ({ id }) => dispatch(markComplete({ id }))
});

export default connect(undefined, mapDispatchToProps)(Checkbox);
