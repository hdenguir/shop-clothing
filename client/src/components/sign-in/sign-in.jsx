import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
//import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'demo@gmail.com',
      password: 'test123'
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={email}
            type="text"
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton as={'a'} onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
