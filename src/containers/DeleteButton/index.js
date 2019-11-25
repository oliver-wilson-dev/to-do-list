import { connect } from 'react-redux';
import DeleteButton from '../../components/DeleteButton';
import removeTask from '../../state/actions/removeTask';

const mapDispatchToProps = dispatch => ({
  removeTask: ({ id }) => dispatch(removeTask({ id }))
});

export default connect(undefined, mapDispatchToProps)(DeleteButton);
