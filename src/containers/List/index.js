import { connect } from 'react-redux';
import List from '../../components/List';
import { getToDos } from '../../state/selectors';

const mapStateToProps = state => ({
  toDos: getToDos(state)
});

export default connect(mapStateToProps)(List);
