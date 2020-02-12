import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-up.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            type="text"
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign Up </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
