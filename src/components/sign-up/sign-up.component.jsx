import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ displayName, email, password });

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({
      ...userCredentials,
      [name]: value
    });
  }


  return (<div className="sign-up">
    <h2 className="title">I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        label='Display Name'
        required="required"
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        label='Display Email'
        required="required"
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        label='Password'
        required="required"
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        label='Confirm Password'
        required="required"
      />
    <CustomButton type='submit'>Sign Up </CustomButton>
    </form>
  </div>)
}

/*class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ displayName, email, password });

  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (<div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='Display Name'
          required="required"
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Display Email'
          required="required"
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Password'
          required="required"
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
          label='Confirm Password'
          required="required"
        />
      <CustomButton type='submit'>Sign Up </CustomButton>
      </form>
    </div>)
  }
}*/

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
