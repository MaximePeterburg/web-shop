import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { ButtonsContainer, SignInFormContainer } from './SignInForm.styles';

const defaultFormFields = {
  email: '',
  password: ''
};

function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('no user with this email');
          break;

        default:
          console.log(error);
      }
      if (error.code === 'auth/wrong-password') {
      }
    }
  };
  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };
  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };
  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}></FormInput>
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}></FormInput>
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
}

export default SignInForm;
