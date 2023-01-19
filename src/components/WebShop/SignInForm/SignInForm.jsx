import React, { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../../utils/Firebase/Firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
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
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className='SignInForm-container'>
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
        <div className='Buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
