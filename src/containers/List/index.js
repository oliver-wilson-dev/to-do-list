import { connect } from 'react-redux';
import List from '../../components/List';
import { getTasks } from '../../state/selectors';

const mapStateToProps = state => ({
  tasks: getTasks(state)
});

export default connect(mapStateToProps)(List);
