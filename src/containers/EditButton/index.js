import { connect } from 'react-redux';
import EditButton from '../../components/EditButton';
import setEditState from '../../state/actions/setEditState';

const mapDispatchToProps = dispatch => ({
  setEditState:
  ({ id, editState, description }) => dispatch(setEditState({ id, editState, description }))
});

export default connect(undefined, mapDispatchToProps)(EditButton);
