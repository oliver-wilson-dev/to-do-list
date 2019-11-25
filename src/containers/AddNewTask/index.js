import { connect } from 'react-redux';
import AddNewTask from '../../components/AddNewTask';
import addTask from '../../state/actions/addTask';

const mapDispatchToProps = dispatch => ({
  addTask: ({ description }) => dispatch(addTask({ description }))
});

export default connect(undefined, mapDispatchToProps)(AddNewTask);
