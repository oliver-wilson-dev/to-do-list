import { connect } from 'react-redux';
import DeleteButton from '../../components/DeleteButton';
import removeToDo from '../../state/actions/removeToDo';

const mapDispatchToProps = dispatch => ({
  removeToDo: ({ id }) => dispatch(removeToDo({ id }))
});

export default connect(undefined, mapDispatchToProps)(DeleteButton);
