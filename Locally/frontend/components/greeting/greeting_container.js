import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import HeaderNav from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: ()=> dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
