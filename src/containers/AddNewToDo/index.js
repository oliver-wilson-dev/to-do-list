import { connect } from 'react-redux';
import AddNewToDo from '../../components/AddNewToDo';
import addToDo from '../../state/actions/addToDo';

const mapDispatchToProps = dispatch => ({
  addToDo: ({ description }) => dispatch(addToDo({ description }))
});

export default connect(undefined, mapDispatchToProps)(AddNewToDo);
