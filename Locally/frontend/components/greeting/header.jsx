import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      signIn: false,
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleClick(bool){
    this.setState({
      modalOpen: true,
      signIn: bool
    })
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  onModalClose(){
    this.setState({modalOpen: false})
  }

  checkLoggedInUser(){
    if (this.props.currentUser){
      return(
        <header>
          <button id="user">{this.props.currentUser.email}</button>
          <button id="logout"
            onClick={this.handleLogout}>Logout</button>
        </header>
      )
    } else {
        let component;
        if (this.state.signIn){
          component = <SessionFormContainer close={this.onModalClose} action="Login" />
        } else {
          component = <SessionFormContainer close={this.onModalClose} action="Sign Up" />
        }

        return (
          <header>
            <button id="login"
              onClick={this.handleClick.bind(this, true)}>Login</button>
            <button id="sign-up"
              onClick={this.handleClick.bind(this, false)}>Sign Up</button>

            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={ModalStyle}>
              {component}
              <button onClick={this.onModalClose}>Close</button>
            </Modal>
          </header>
        )
    }

  }

  render(){
    return(
      <nav>
        {this.checkLoggedInUser()}
      </nav>
    )
  }


}
export default Header;
