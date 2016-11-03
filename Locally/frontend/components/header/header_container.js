import { connect } from 'react-redux';
import { logout, clearError } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
