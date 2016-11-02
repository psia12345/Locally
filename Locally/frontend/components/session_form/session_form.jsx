import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }
  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    );
  }

  navLink(){
    if (this.props.formType === "login") {
      return <Link to="/signup">Or, sign up.</Link>
    } else {
      return (<div>Already have an account? <Link to="/login">log in.</Link></div>)
    }
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType}
          <br />
          {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <input type="text" placeholder="email"
                   value={this.state.email}
                   onChange={this.update("email")}
                   className="login-input"/>
            <br />
            <input type="text" placeholder="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="login-input" />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  };

}
export default withRouter(SessionForm);
