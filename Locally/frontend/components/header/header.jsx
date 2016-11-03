import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session_form/session_form_container';
import {Link} from 'react-router'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      signIn: ""
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleClick(string){
    this.setState({
      modalOpen: true,
      signIn: string
    })
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  onModalClose(){
    this.props.clearError();
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
        return (
          <header>
            <button id="login"
              onClick={this.handleClick.bind(this, "Login")}>Login</button>
            <button id="sign-up"
              onClick={this.handleClick.bind(this, "Sign Up")}>Sign Up</button>

            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={ModalStyle}>
              <SessionFormContainer close={this.onModalClose} action={this.state.signIn} />
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
