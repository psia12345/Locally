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
    this.handleGuest = this.handleGuest.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    if (this.props.action === "Login"){
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
    this.props.close();
  }

  handleGuest(e){
    e.preventDefault();
    const user = { email: "test@gmail.com", password: "password" };
    this.props.login(user);
    this.props.close();
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

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  	// navLink() {
  	// 	if (this.props.formType === "Login") {
  	// 		return <Link to="/signup">sign up instead</Link>;
  	// 	} else {
  	// 		return <Link to="/login">log in instead</Link>;
  	// 	}
  	// }
  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.action}
          {this.renderErrors()}
          <div className="login-form">
            <input type="text" placeholder="email"
                   value={this.state.email}
                   onChange={this.update("email")}
                   className="login-input"/>
            <br />
            <input type="password" placeholder="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="login-input" />
            <br />
            <input type="submit" value="Submit" />
            <input type="submit" value="Guest" onClick={this.handleGuest} />
          </div>
        </form>
      </div>
    )
  };

}
export default withRouter(SessionForm);
